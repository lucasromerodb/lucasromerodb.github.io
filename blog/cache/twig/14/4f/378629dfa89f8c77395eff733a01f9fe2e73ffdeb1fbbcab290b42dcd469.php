<?php

/* partials/base.html.twig */
class __TwigTemplate_144f378629dfa89f8c77395eff733a01f9fe2e73ffdeb1fbbcab290b42dcd469 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'head' => array($this, 'block_head'),
            'stylesheets' => array($this, 'block_stylesheets'),
            'javascripts' => array($this, 'block_javascripts'),
            'header' => array($this, 'block_header'),
            'header_extra' => array($this, 'block_header_extra'),
            'header_navigation' => array($this, 'block_header_navigation'),
            'showcase' => array($this, 'block_showcase'),
            'body' => array($this, 'block_body'),
            'content' => array($this, 'block_content'),
            'pagination' => array($this, 'block_pagination'),
            'footer' => array($this, 'block_footer'),
            'bottom' => array($this, 'block_bottom'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!DOCTYPE html>
<html lang=\"en\">
<head>
";
        // line 4
        $this->displayBlock('head', $context, $blocks);
        // line 47
        echo "
</head>
<body id=\"top\" class=\"";
        // line 49
        echo $this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "body_classes", array());
        echo "\">
    <div id=\"sb-site\">
        ";
        // line 51
        $this->displayBlock('header', $context, $blocks);
        // line 67
        echo "
        ";
        // line 68
        $this->displayBlock('showcase', $context, $blocks);
        // line 69
        echo "
        ";
        // line 70
        $this->displayBlock('body', $context, $blocks);
        // line 76
        echo "
        ";
        // line 77
        $this->displayBlock('footer', $context, $blocks);
        // line 85
        echo "    </div>
    <div class=\"sb-slidebar sb-left sb-width-thin\">
        <div id=\"panel\">
        ";
        // line 88
        $this->env->loadTemplate("partials/navigation.html.twig")->display($context);
        // line 89
        echo "        </div>
    </div>
    ";
        // line 91
        $this->displayBlock('bottom', $context, $blocks);
        // line 106
        echo "</body>
</html>
";
    }

    // line 4
    public function block_head($context, array $blocks = array())
    {
        // line 5
        echo "    <meta charset=\"utf-8\" />
    <title>";
        // line 6
        if ($this->getAttribute((isset($context["header"]) ? $context["header"] : null), "title", array())) {
            echo $this->getAttribute((isset($context["header"]) ? $context["header"] : null), "title", array());
            echo " | ";
        }
        echo $this->getAttribute((isset($context["site"]) ? $context["site"] : null), "title", array());
        echo "</title>
    ";
        // line 7
        $this->env->loadTemplate("partials/metadata.html.twig")->display($context);
        // line 8
        echo "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no\">
    <link rel=\"icon\" type=\"image/png\" href=\"";
        // line 9
        echo (isset($context["theme_url"]) ? $context["theme_url"] : null);
        echo "/images/favicon.png\" />

    ";
        // line 11
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 33
        echo "
    ";
        // line 34
        $this->displayBlock('javascripts', $context, $blocks);
    }

    // line 11
    public function block_stylesheets($context, array $blocks = array())
    {
        // line 12
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addCss", array(0 => "theme://css-compiled/nucleus.css", 1 => 102), "method");
        // line 13
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addCss", array(0 => "theme://css-compiled/template.css", 1 => 101), "method");
        // line 14
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addCss", array(0 => "theme://css/font-awesome.min.css", 1 => 100), "method");
        // line 15
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addCss", array(0 => "theme://css/slidebars.min.css"), "method");
        // line 16
        echo "
        ";
        // line 17
        if ($this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "lightbox", array())) {
            // line 18
            echo "            ";
            $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addCss", array(0 => "theme://css/featherlight.min.css"), "method");
            // line 19
            echo "        ";
        }
        // line 20
        echo "
        ";
        // line 21
        if ((($this->getAttribute((isset($context["browser"]) ? $context["browser"] : null), "getBrowser", array()) == "msie") && ($this->getAttribute((isset($context["browser"]) ? $context["browser"] : null), "getVersion", array()) == 10))) {
            // line 22
            echo "            ";
            $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addCss", array(0 => "theme://css/nucleus-ie10.css"), "method");
            // line 23
            echo "        ";
        }
        // line 24
        echo "
        ";
        // line 25
        if (((($this->getAttribute((isset($context["browser"]) ? $context["browser"] : null), "getBrowser", array()) == "msie") && ($this->getAttribute((isset($context["browser"]) ? $context["browser"] : null), "getVersion", array()) >= 8)) && ($this->getAttribute((isset($context["browser"]) ? $context["browser"] : null), "getVersion", array()) <= 9))) {
            // line 26
            echo "            ";
            $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addCss", array(0 => "theme://css/nucleus-ie9.css"), "method");
            // line 27
            echo "            ";
            $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addCss", array(0 => "theme://css/pure-0.5.0/grids-min.css"), "method");
            // line 28
            echo "            ";
            $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addCss", array(0 => "theme://js/html5shiv-printshiv.min.js"), "method");
            // line 29
            echo "        ";
        }
        // line 30
        echo "
        ";
        // line 31
        echo $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "css", array(), "method");
        echo "
    ";
    }

    // line 34
    public function block_javascripts($context, array $blocks = array())
    {
        // line 35
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addJs", array(0 => "theme://js/jquery-2.1.1.min.js", 1 => 101), "method");
        // line 36
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addJs", array(0 => "theme://js/modernizr.custom.71422.js", 1 => 100), "method");
        // line 37
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addJs", array(0 => "theme://js/nova-theme.js"), "method");
        // line 38
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addJs", array(0 => "theme://js/slidebars.min.js"), "method");
        // line 39
        echo "
        ";
        // line 40
        if ($this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "lightbox", array())) {
            // line 41
            echo "            ";
            $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addJs", array(0 => "theme://js/featherlight.min.js"), "method");
            // line 42
            echo "        ";
        }
        // line 43
        echo "
        ";
        // line 44
        echo $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "js", array(), "method");
        echo "
    ";
    }

    // line 51
    public function block_header($context, array $blocks = array())
    {
        // line 52
        echo "        <header id=\"header\">

                <div id=\"logo\">
                    <h3><a href=\"";
        // line 55
        echo (isset($context["base_url_relative"]) ? $context["base_url_relative"] : null);
        echo "\">";
        echo $this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "site", array()), "title", array());
        echo "</a></h3>
                </div>
                <div id=\"navbar\">
                    ";
        // line 58
        $this->displayBlock('header_extra', $context, $blocks);
        // line 59
        echo "                    ";
        $this->displayBlock('header_navigation', $context, $blocks);
        // line 62
        echo "                    <span class=\"panel-activation sb-toggle-left navbar-left menu-btn fa fa-bars\"></span>
                </div>

        </header>
        ";
    }

    // line 58
    public function block_header_extra($context, array $blocks = array())
    {
    }

    // line 59
    public function block_header_navigation($context, array $blocks = array())
    {
        // line 60
        echo "                    ";
        $this->env->loadTemplate("partials/navigation.html.twig")->display($context);
        // line 61
        echo "                    ";
    }

    // line 68
    public function block_showcase($context, array $blocks = array())
    {
    }

    // line 70
    public function block_body($context, array $blocks = array())
    {
        // line 71
        echo "        <section id=\"body\" class=\"";
        echo (isset($context["class"]) ? $context["class"] : null);
        echo "\">
            ";
        // line 72
        $this->displayBlock('content', $context, $blocks);
        // line 73
        echo "            ";
        $this->displayBlock('pagination', $context, $blocks);
        // line 74
        echo "        </section>
        ";
    }

    // line 72
    public function block_content($context, array $blocks = array())
    {
    }

    // line 73
    public function block_pagination($context, array $blocks = array())
    {
    }

    // line 77
    public function block_footer($context, array $blocks = array())
    {
        // line 78
        echo "        <footer id=\"footer\">
            <div class=\"totop\">
                <span><a href=\"#\" id=\"toTop\"><i class=\"fa fa-arrow-up\"></i></a></span>
            </div>
            <p><a href=\"http://getgrav.org\">Grav</a> was <i class=\"fa fa-code\"></i> with <i class=\"fa fa-heart\"></i> by <a href=\"http://www.rockettheme.com\">RocketTheme</a>.</p>
        </footer>
        ";
    }

    // line 91
    public function block_bottom($context, array $blocks = array())
    {
        // line 92
        echo "    <script>
    \$(function () {
        \$(document).ready(function() {
          \$.slidebars({
            hideControlClasses: true,
            scrollLock: true
          });
        });
        ";
        // line 100
        if ($this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "lightbox", array())) {
            // line 101
            echo "        \$('a[rel=\"lightbox\"]').featherlight();
        ";
        }
        // line 103
        echo "    });
    </script>
    ";
    }

    public function getTemplateName()
    {
        return "partials/base.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  323 => 103,  319 => 101,  317 => 100,  307 => 92,  304 => 91,  294 => 78,  291 => 77,  286 => 73,  281 => 72,  276 => 74,  273 => 73,  271 => 72,  266 => 71,  263 => 70,  258 => 68,  254 => 61,  251 => 60,  248 => 59,  243 => 58,  235 => 62,  232 => 59,  230 => 58,  222 => 55,  217 => 52,  214 => 51,  208 => 44,  205 => 43,  202 => 42,  199 => 41,  197 => 40,  194 => 39,  191 => 38,  188 => 37,  185 => 36,  182 => 35,  179 => 34,  173 => 31,  170 => 30,  167 => 29,  164 => 28,  161 => 27,  158 => 26,  156 => 25,  153 => 24,  150 => 23,  147 => 22,  145 => 21,  142 => 20,  139 => 19,  136 => 18,  134 => 17,  131 => 16,  128 => 15,  125 => 14,  122 => 13,  119 => 12,  116 => 11,  112 => 34,  109 => 33,  107 => 11,  102 => 9,  99 => 8,  97 => 7,  89 => 6,  86 => 5,  83 => 4,  77 => 106,  75 => 91,  71 => 89,  69 => 88,  64 => 85,  62 => 77,  59 => 76,  57 => 70,  54 => 69,  52 => 68,  49 => 67,  47 => 51,  42 => 49,  38 => 47,  36 => 4,  31 => 1,);
    }
}
