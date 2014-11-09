<?php

/* breadcrumbs.html.twig */
class __TwigTemplate_2c7b0ec38a37797eddc11e7b8e5d94749c5d322f53ef3c27f6b755eabba6d233 extends Twig_Template
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
        $context["crumbs"] = $this->getAttribute((isset($context["breadcrumbs"]) ? $context["breadcrumbs"] : null), "get", array(), "method");
        // line 2
        echo "
";
        // line 3
        if (((twig_length_filter($this->env, (isset($context["crumbs"]) ? $context["crumbs"] : null)) > 1) || $this->getAttribute($this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "plugins", array()), "breadcrumbs", array()), "show_all", array()))) {
            // line 4
            echo "<div id=\"breadcrumbs\">
    ";
            // line 5
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["crumbs"]) ? $context["crumbs"] : null));
            foreach ($context['_seq'] as $context["_key"] => $context["crumb"]) {
                // line 6
                echo "    <a href=\"";
                echo $this->getAttribute($context["crumb"], "url", array());
                echo "\">";
                echo $this->getAttribute($context["crumb"], "menu", array());
                echo "</a><i class=\"fa fa-angle-right\"></i>
    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['crumb'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 8
            echo "</div>
";
        }
    }

    public function getTemplateName()
    {
        return "breadcrumbs.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  44 => 8,  33 => 6,  29 => 5,  26 => 4,  24 => 3,  21 => 2,  19 => 1,);
    }
}
