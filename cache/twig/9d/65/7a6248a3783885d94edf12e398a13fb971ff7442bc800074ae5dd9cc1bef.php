<?php

/* partials/blog_item.html.twig */
class __TwigTemplate_9d657a6248a3783885d94edf12e398a13fb971ff7442bc800074ae5dd9cc1bef extends Twig_Template
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
        echo "<div class=\"list-item\">

    <div class=\"list-blog-header\">
        <span class=\"list-blog-date\">
            <span>";
        // line 5
        echo twig_date_format_filter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "date", array()), "d");
        echo "</span>
            <em>";
        // line 6
        echo twig_date_format_filter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "date", array()), "M");
        echo "</em>
        </span>
        <h4><a href=\"";
        // line 8
        echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "url", array());
        echo "\">";
        echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "title", array());
        echo "</a></h4>
        ";
        // line 9
        if ($this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "taxonomy", array()), "tag", array())) {
            // line 10
            echo "        <span class=\"tags\">
            ";
            // line 11
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "taxonomy", array()), "tag", array()));
            foreach ($context['_seq'] as $context["_key"] => $context["tag"]) {
                // line 12
                echo "            <a href=\"";
                echo (isset($context["base_url"]) ? $context["base_url"] : null);
                echo "/tag:";
                echo $context["tag"];
                echo "\">";
                echo $context["tag"];
                echo "</a>
            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['tag'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 14
            echo "        </span>
        ";
        }
        // line 16
        echo "        ";
        if ((isset($context["big_header"]) ? $context["big_header"] : null)) {
            // line 17
            echo "            ";
            echo $this->getAttribute($this->getAttribute(twig_first($this->env, $this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "media", array()), "images", array())), "cropResize", array(0 => 900, 1 => 600), "method"), "html", array());
            echo "
        ";
        } else {
            // line 19
            echo "            ";
            echo $this->getAttribute($this->getAttribute(twig_first($this->env, $this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "media", array()), "images", array())), "cropZoom", array(0 => 900, 1 => 300), "method"), "html", array());
            echo "
        ";
        }
        // line 21
        echo "
    </div>

    <div class=\"list-blog-padding\">
    ";
        // line 25
        if (((isset($context["truncate"]) ? $context["truncate"] : null) && ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "summary", array()) != $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content", array())))) {
            // line 26
            echo "        <p>";
            echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "summary", array());
            echo "</p>
        <p><a href=\"";
            // line 27
            echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "url", array());
            echo "\">Continue Reading...</a></p>
    ";
        } elseif ((isset($context["truncate"]) ? $context["truncate"] : null)) {
            // line 29
            echo "        <p>";
            echo $this->env->getExtension('GravTwigExtension')->truncateFilter($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content", array()), 550);
            echo "</p>
        <p><a href=\"";
            // line 30
            echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "url", array());
            echo "\">Continue Reading...</a></p>
    ";
        } else {
            // line 32
            echo "        <p>";
            echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content", array());
            echo "</p>
    ";
        }
        // line 34
        echo "    </div>

</div>
";
    }

    public function getTemplateName()
    {
        return "partials/blog_item.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  115 => 34,  109 => 32,  104 => 30,  99 => 29,  94 => 27,  89 => 26,  87 => 25,  81 => 21,  75 => 19,  69 => 17,  66 => 16,  62 => 14,  49 => 12,  45 => 11,  42 => 10,  40 => 9,  34 => 8,  29 => 6,  25 => 5,  19 => 1,);
    }
}
