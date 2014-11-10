<?php

/* partials/archives.html.twig */
class __TwigTemplate_6ed0691d6f04077f5e443611c44c5d41b19ff779eb8e9b90d08784cb7a861701 extends Twig_Template
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
        echo "<ul class=\"archives\">

";
        // line 3
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["archives_data"]) ? $context["archives_data"] : null));
        foreach ($context['_seq'] as $context["month"] => $context["items"]) {
            // line 4
            echo "    <li>
    \t<a href=\"";
            // line 5
            echo (isset($context["base_url"]) ? $context["base_url"] : null);
            echo "/month:";
            echo twig_escape_filter($this->env, twig_lower_filter($this->env, twig_date_format_filter($this->env, $context["month"], "M_Y")), "url");
            echo "\">
        ";
            // line 6
            if ((isset($context["archives_show_count"]) ? $context["archives_show_count"] : null)) {
                // line 7
                echo "        <span class=\"label\">";
                echo twig_length_filter($this->env, $context["items"]);
                echo "</span>
        ";
            }
            // line 9
            echo "        <span class=\"archive_date\">";
            echo $context["month"];
            echo "</span>
        </a>
    </li>
";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['month'], $context['items'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 13
        echo "</ul>
";
    }

    public function getTemplateName()
    {
        return "partials/archives.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  55 => 13,  44 => 9,  38 => 7,  36 => 6,  30 => 5,  27 => 4,  23 => 3,  19 => 1,);
    }
}
