<?php
namespace Grav\Common;

use Grav\Common\Page\Pages;
use Grav\Common\Service\ConfigServiceProvider;
use Grav\Common\Service\ErrorServiceProvider;
use Grav\Common\Service\LoggerServiceProvider;
use Grav\Common\Service\StreamsServiceProvider;
use RocketTheme\Toolbox\DI\Container;
use RocketTheme\Toolbox\Event\Event;
use RocketTheme\Toolbox\Event\EventDispatcher;
use Grav\Common\Page\Medium;

/**
 * Grav
 *
 * @author Andy Miller
 * @link http://www.rockettheme.com
 * @license http://opensource.org/licenses/MIT
 *
 * Influenced by Pico, Stacey, Kirby, PieCrust and other great platforms...
 */
class Grav extends Container
{
    /**
     * @var string
     */
    protected $output;

    /**
     * @var static
     */
    protected static $instance;

    public static function instance(array $values = array())
    {
        if (!self::$instance) {
            self::$instance = static::load($values);

            GravTrait::setGrav(self::$instance);

        } elseif ($values) {
            $instance = self::$instance;
            foreach ($values as $key => $value) {
                $instance->offsetSet($key, $value);
            }
        }

        return self::$instance;
    }

    protected static function load(array $values)
    {
        $container = new static($values);

        $container['grav'] = $container;

        $container['debugger'] = new Debugger();
        $container['debugger']->startTimer('_init', 'Initialize');

        $container->register(new LoggerServiceProvider);

        $container->register(new ErrorServiceProvider);

        $container['uri'] = function ($c) {
            return new Uri($c);
        };

        $container['task'] = function ($c) {
            return !empty($_POST['task']) ? $_POST['task'] : $c['uri']->param('task');
        };

        $container['events'] = function ($c) {
            return new EventDispatcher;
        };
        $container['cache'] = function ($c) {
            return new Cache($c);
        };
        $container['plugins'] = function ($c) {
            return new Plugins($c);
        };
        $container['themes'] = function ($c) {
            return new Themes($c);
        };
        $container['twig'] = function ($c) {
            return new Twig($c);
        };
        $container['taxonomy'] = function ($c) {
            return new Taxonomy($c);
        };
        $container['pages'] = function ($c) {
            return new Page\Pages($c);
        };
        $container['assets'] = function ($c) {
            return new Assets();
        };
        $container['page'] = function ($c) {
            /** @var Pages $pages */
            $pages = $c['pages'];
            $page = $pages->dispatch($c['uri']->route());

            if (!$page || !$page->routable()) {

                // special  case where a media file is requested
                if (!$page) {
                    $path_parts = pathinfo($c['uri']->route());
                    $page = $c['pages']->dispatch($path_parts['dirname']);
                    if ($page) {
                        $media = $page->media()->all();
                        $media_file = urldecode($path_parts['basename']);
                        if (isset($media[$media_file])) {
                            $medium = $media[$media_file];

                            // loop through actions for the image and call them
                            foreach ($c['uri']->query(null,true) as $action => $params) {
                                if (in_array($action, Medium::$valid_actions)) {
                                    call_user_func_array(array(&$medium, $action), explode(',', $params));
                                }
                            }
                            header('Content-type: '. $mime = $medium->get('mime'));
                            echo file_get_contents($medium->path());
                            die;
                        }
                    }
                }

                // If no page found, fire event
                $event = $c->fireEvent('onPageNotFound');

                if (isset($event->page)) {
                    $page = $event->page;
                } else {
                    throw new \RuntimeException('Page Not Found', 404);
                }
            }
            return $page;
        };
        $container['output'] = function ($c) {
            return $c['twig']->processSite($c['uri']->extension());
        };
        $container['browser'] = function ($c) {
            return new Browser();
        };

        $container->register(new StreamsServiceProvider);
        $container->register(new ConfigServiceProvider);

        $container['debugger']->stopTimer('_init');

        return $container;
    }

    public function process()
    {
        // Use output buffering to prevent headers from being sent too early.
        ob_start();

        /** @var Debugger $debugger */
        $debugger = $this['debugger'];

        // Initialize configuration.
        $debugger->startTimer('_config', 'Configuration');
        $this['config']->init();
        $this['errors']->resetHandlers();
        $debugger->init();
        $this['config']->debug();
        $debugger->stopTimer('_config');

        $debugger->startTimer('streams', 'Streams');
        $this['streams'];
        $debugger->stopTimer('streams');

        $debugger->startTimer('plugins', 'Plugins');
        $this['plugins']->init();
        $this->fireEvent('onPluginsInitialized');
        $debugger->stopTimer('plugins');

        $debugger->startTimer('themes', 'Themes');
        $this['themes']->init();
        $this->fireEvent('onThemeInitialized');
        $debugger->stopTimer('themes');

        $task = $this['task'];
        if ($task) {
            $this->fireEvent('onTask.' . $task);
        }

        $this['assets']->init();
        $this->fireEvent('onAssetsInitialized');

        $debugger->startTimer('twig', 'Twig');
        $this['twig']->init();
        $debugger->stopTimer('twig');

        $debugger->startTimer('pages', 'Pages');
        $this['pages']->init();
        $this->fireEvent('onPagesInitialized');
        $debugger->stopTimer('pages');

        $this->fireEvent('onPageInitialized');

        $debugger->addAssets();

        // Process whole page as required
        $debugger->startTimer('render', 'Render');
        $this->output = $this['output'];
        $this->fireEvent('onOutputGenerated');
        $debugger->stopTimer('render');

        // Set the header type
        $this->header();
        echo $this->output;
        $debugger->render();

        $this->fireEvent('onOutputRendered');

        register_shutdown_function([$this, 'shutdown']);
    }

    /**
     * Redirect browser to another location.
     *
     * @param string $route Internal route.
     * @param int $code Redirection code (30x)
     */
    public function redirect($route, $code = 303)
    {
        /** @var Uri $uri */
        $uri = $this['uri'];

        if (isset($this['session'])) {
            $this['session']->close();
        }

        header("Location: " . rtrim($uri->rootUrl(), '/') .'/'. trim($route, '/'), true, $code);
        exit();
    }

    /**
     * Returns mime type for the file format.
     *
     * @param string $format
     * @return string
     */
    public function mime($format)
    {
        switch ($format) {
            case 'json':
                return 'application/json';
            case 'html':
                return 'text/html';
            case 'atom':
                return 'application/atom+xml';
            case 'rss':
                return 'application/rss+xml';
            case 'xml':
                return 'application/xml';
        }
        return 'text/html';
    }

    /**
     * Set response header.
     */
    public function header()
    {
        $extension = $this['uri']->extension();
        header('Content-type: ' . $this->mime($extension));

        // Set debugger data in headers
        if (!($extension == null || $extension == 'html')) {
            $this['debugger']->enabled(false);
            // $this['debugger']->sendDataInHeaders();
        }
    }

    /**
     * Fires an event with optional parameters.
     *
     * @param  string $eventName
     * @param  Event  $event
     * @return Event
     */
    public function fireEvent($eventName, Event $event = null)
    {
        /** @var EventDispatcher $events */
        $events = $this['events'];
        return $events->dispatch($eventName, $event);
    }

    /**
     * Set the final content length for the page and flush the buffer
     *
     */
    public function shutdown()
    {
        if($this['config']->get('system.debugger.shutdown.close_connection')) {
            /*set_time_limit(0);*/
            ignore_user_abort(true);

            if (isset($this['session'])) {
                $this['session']->close();
            }

            header('Content-length: ' . ob_get_length());
            header("Connection: close\r\n");

            ob_end_flush();
            ob_flush();
            flush();
        }

        $this->fireEvent('onShutdown');
    }
}
