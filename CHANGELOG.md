# v0.9.4 beta
## 10/29/2014

1. [](#new)
    * New improved Debugbar with messages, timing, config, twig information
    * New exception handling system utilizing Whoops
    * New logging system utilizing Monolog
    * Support for auto-detecting environment configuration
    * New version command for CLI
    * Integrate Twig dump() calls into Debugbar
2. [](#improved)
    * Selfupgrade now clears cache on successful upgrade
    * Selfupgrade now supports files without extensions
    * Improved error messages when plugin is missing
    * Improved security in .htaccess
    * Support CSS/JS/Image assets in vendor/system folders via .htaccess
    * Add support for system timers
    * Improved and optimized configuration loading
    * Automatically disable Debugbar on non-HTML pages
    * Disable Debugbar by default
3. [](#bugfix)
    * More YAML blueprint fixes
    * Fix potential double // in assets
    * Load debugger as early as possible

# v0.9.3 beta
## 10/09/2014

1. [](#new)
    * GPM (Grav Package Manager) Added
    * Support for multiple Grav configurations
    * Dynamic media support via URL
    * Added inlineCss and inlineJs support for Assets
2. [](#improved)
    * YAML caching for increased performance
    * Use stream wrapper in pages, plugins and themes
    * Switched to RocketTheme toolbox for some core functionality
    * Renamed `setup` CLI command to `sandbox`
    * Broke cache types out into multiple directories in the cache folder
    * Removed vendor libs from github repository
    * Various PSR cleanup of code
    * Various Blueprint updates to support upcoming Admin plugin
    * Added ability to filter page children for normal/modular/all
    * Added `sort_by_key` twig filter
    * Added `visible()` and `routable()` filters to page collections
    * Use session class in shutdown process
    * Improvements to modular page loading
    * Various code cleanup and optimizations
3. [](#bugfix)
    * Fixed file checking not updating the last modified time. For real this time!
    * Switched debugger to PRODUCTION mode by default
    * Various fixes in URI class for increased reliability

# v0.9.2 beta
## 09/15/2014

1. [](#new)
    * New flexible site and page metadata support including ObjectGraph and Facebook
    * New method to get user IP address in URI object
    * Added new onShutdown() event that fires after connection is closed for Async features
2. [](#improved)
    * Skip assets pipeline minify on Windows platforms by default due to PHP issue 47689
    * Fixed multiple level menus not highlighting correctly
    * Updated some blueprints in preparation for admin plugin
    * Fail gracefully when theme does not exist
    * Add stream support into ResourceLocator::addPath()
    * Separate themes from plugins, add themes:// stream and onTask events
    * Added barDump() to Debugger
    * Removed stray test page
    * Override modified only if a non-markdown file was modified
    * Added assets attributes support
    * Auto-run composer install when running the Grav CLI
    * Vendor folder removed from repository
    * Minor configuration performance optimizations
    * Minor debugger performance optimizations
3. [](#bugfix)
    * Fix url() twig function when Grav isn't installed at root
    * Workaround for PHP bug 52065
    * Fixed getList() method on Pages object that was not working
    * Fix for open_basedir error
    * index.php now warns if not running on PHP 5.4
    * Removed memcached option (redundant)
    * Removed memcache from auto setup, added memcache server configuration option
    * Fix broken password validation
    * Back to proper PSR-4 Autoloader

# v0.9.1 beta
## 09/02/2014

1. [](#new)
    * Added new `theme://` PHP stream for current theme
2. [](#improved)
    * Default to new `file` modification checking rather than `folder`
    * Added support for various markdown link formats to convert to Grav-friendly URLs
    * Moved configure() from Theme to Themes class
    * Fix autoloading without composer update -o
    * Added support for Twig url method
    * Minor code cleanup
3. [](#bugfix)
    * Fixed issue with page changes not being picked up
    * Fixed Minify to provide `@supports` tag compatibility
    * Fixed ResourceLocator not working with multiple paths
    * Fixed issue with Markdown process not stripping LFs
    * Restrict file type extensions for added security
    * Fixed template inheritance
    * Moved Browser class to proper location

# v0.9.0 beta
## 08/25/2014

1. [](#new)
    * Addition of Dependency Injection Container
    * Refactored plugins to use Symfony Event Dispatcher
    * New Asset Manager to provide unified management of JavaScript and CSS
    * Asset Pipelining to provide unification, minify, and optimazation of JavaScript and CSS
    * Grav Media support directly in Markdown syntax
    * Additional Grav Generator meta tag in default themes
    * Added support for PHP Stream Wrapper for resource location
    * Markdown Extra support
    * Browser object for fast browser detection
2. [](#improved)
    * PSR-4 Autoloader mechanism
    * Tracy Debugger new `detect` option to detect running environment
    * Added new `random` collection sort option
    * Make media images progressive by default
    * Additional URI filtering for improved security
    * Safety checks to ensure PHP 5.4.0+
    * Move to Slidebars side navigation in default Antimatter theme
    * Updates to `.htaccess` including section on `RewriteBase` which is needed for some hosting providers
3. [](#bugfix)
    * Fixed issue when installing in an apache userdir (~username) folder
    * Various mobile CSS issues in default themes
    * Various minor bug fixes


# v0.8.0 beta
## 08/13/2014

1. [](#new)
    * Initial Release
