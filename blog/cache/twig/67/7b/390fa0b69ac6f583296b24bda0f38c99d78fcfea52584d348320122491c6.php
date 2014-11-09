<?php

/* blog.html.twig */
class __TwigTemplate_677b390fa0b69ac6f583296b24bda0f38c99d78fcfea52584d348320122491c6 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        $this->env->loadTemplate("blog.html.twig", "1066824349")->display($context);
        // line 38
        echo "

";
    }

    public function getTemplateName()
    {
        return "blog.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  21 => 38,  19 => 1,);
    }
}


/* blog.html.twig */
class __TwigTemplate_677b390fa0b69ac6f583296b24bda0f38c99d78fcfea52584d348320122491c6_1066824349 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = $this->env->loadTemplate("partials/base.html.twig");

        $this->blocks = array(
            'content' => array($this, 'block_content'),
            'pagination' => array($this, 'block_pagination'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "partials/base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 3
        $context["collection"] = $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "collection", array(), "method");
        // line 4
        $context["base_url"] = ((isset($context["base_url_relative"]) ? $context["base_url_relative"] : null) . $this->getAttribute($this->getAttribute((isset($context["site"]) ? $context["site"] : null), "blog", array()), "route", array()));
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 6
    public function block_content($context, array $blocks = array())
    {
        // line 7
        echo "\t\t";
        $context["blog_image"] = $this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(twig_first($this->env, $this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "media", array()), "images", array())), "grayscale", array(), "method"), "contrast", array(0 => 20), "method"), "brightness", array(0 => (-100)), "method"), "colorize", array(0 => (-35), 1 => 81, 2 => 122), "method");
        // line 8
        echo "
\t\t";
        // line 9
        if ((isset($context["blog_image"]) ? $context["blog_image"] : null)) {
            // line 10
            echo "\t\t\t<div class=\"flush-top blog-header blog-header-image\" style=\"background-image: url(";
            echo $this->getAttribute((isset($context["blog_image"]) ? $context["blog_image"] : null), "url", array());
            echo ");\">
\t\t";
        } else {
            // line 12
            echo "\t\t<div class=\"blog-header\">
\t\t";
        }
        // line 14
        echo "\t\t\t";
        echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content", array());
        echo "
\t\t</div>

\t\t";
        // line 17
        $this->env->loadTemplate("breadcrumbs.html.twig")->display($context);
        // line 18
        echo "
\t\t<div class=\"content-wrapper blog-content-list grid pure-g-r\">
\t\t\t<div id=\"listing\" class=\"block pure-u-2-3\">
\t\t\t\t";
        // line 21
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["collection"]) ? $context["collection"] : null));
        $context['loop'] = array(
          'parent' => $context['_parent'],
          'index0' => 0,
          'index'  => 1,
          'first'  => true,
        );
        if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof Countable)) {
            $length = count($context['_seq']);
            $context['loop']['revindex0'] = $length - 1;
            $context['loop']['revindex'] = $length;
            $context['loop']['length'] = $length;
            $context['loop']['last'] = 1 === $length;
        }
        foreach ($context['_seq'] as $context["_key"] => $context["child"]) {
            // line 22
            echo "\t\t\t        ";
            $this->env->loadTemplate("partials/blog_item.html.twig")->display(array_merge($context, array("page" => $context["child"], "truncate" => true)));
            // line 23
            echo "\t\t\t    ";
            ++$context['loop']['index0'];
            ++$context['loop']['index'];
            $context['loop']['first'] = false;
            if (isset($context['loop']['length'])) {
                --$context['loop']['revindex0'];
                --$context['loop']['revindex'];
                $context['loop']['last'] = 0 === $context['loop']['revindex0'];
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['child'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 24
        echo "\t\t\t</div>
\t\t\t<div id=\"sidebar\" class=\"block size-1-3 pure-u-1-3\">
\t\t\t\t";
        // line 26
        $this->env->loadTemplate("partials/sidebar.html.twig")->display($context);
        // line 27
        echo "\t\t\t</div>
\t\t</div>
\t";
    }

    // line 31
    public function block_pagination($context, array $blocks = array())
    {
        // line 32
        echo "\t    ";
        if ($this->getAttribute($this->getAttribute((isset($context["collection"]) ? $context["collection"] : null), "params", array()), "pagination", array())) {
            // line 33
            echo "\t    ";
            $this->env->loadTemplate("pagination.html.twig")->display(array_merge($context, array("pagination" => $this->getAttribute($this->getAttribute((isset($context["collection"]) ? $context["collection"] : null), "params", array()), "pagination", array()))));
            // line 34
            echo "\t    ";
        }
        // line 35
        echo "\t";
    }

    public function getTemplateName()
    {
        return "blog.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  166 => 35,  163 => 34,  160 => 33,  157 => 32,  154 => 31,  148 => 27,  146 => 26,  142 => 24,  128 => 23,  125 => 22,  108 => 21,  103 => 18,  101 => 17,  94 => 14,  90 => 12,  84 => 10,  82 => 9,  79 => 8,  76 => 7,  73 => 6,  68 => 4,  66 => 3,  21 => 38,  19 => 1,);
    }
}
