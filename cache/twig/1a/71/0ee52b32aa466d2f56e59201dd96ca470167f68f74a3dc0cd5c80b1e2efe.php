<?php

/* pagination.html.twig */
class __TwigTemplate_1a710ee52b32aa466d2f56e59201dd96ca470167f68f74a3dc0cd5c80b1e2efe extends Twig_Template
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
        if ((twig_length_filter($this->env, (isset($context["pagination"]) ? $context["pagination"] : null)) > 1)) {
            // line 2
            echo "
<ul class=\"pagination\">
    ";
            // line 4
            if ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "hasPrev", array())) {
                // line 5
                echo "        <li><a href=\"";
                echo (isset($context["base_url"]) ? $context["base_url"] : null);
                echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "prevUrl", array());
                echo "\">&laquo;</a></li>
    ";
            } else {
                // line 7
                echo "        <li><span>&laquo;</span></li>
    ";
            }
            // line 9
            echo "
    ";
            // line 10
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["pagination"]) ? $context["pagination"] : null));
            foreach ($context['_seq'] as $context["_key"] => $context["paginate"]) {
                // line 11
                echo "
        ";
                // line 12
                if ($this->getAttribute($context["paginate"], "isCurrent", array())) {
                    // line 13
                    echo "            <li><span>";
                    echo $this->getAttribute($context["paginate"], "number", array());
                    echo "</span></li>
        ";
                } else {
                    // line 15
                    echo "            <li><a href=\"";
                    echo (isset($context["base_url"]) ? $context["base_url"] : null);
                    echo $this->getAttribute($context["paginate"], "url", array());
                    echo "\">";
                    echo $this->getAttribute($context["paginate"], "number", array());
                    echo "</a></li>
        ";
                }
                // line 17
                echo "
    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['paginate'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 19
            echo "    ";
            if ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "hasNext", array())) {
                // line 20
                echo "        <li><a href=\"";
                echo (isset($context["base_url"]) ? $context["base_url"] : null);
                echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "nextUrl", array());
                echo "\">&raquo;</a></li>
    ";
            } else {
                // line 22
                echo "        <li><span>&raquo;</span></li>
    ";
            }
            // line 24
            echo "</ul>

";
        }
    }

    public function getTemplateName()
    {
        return "pagination.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  86 => 24,  82 => 22,  75 => 20,  72 => 19,  65 => 17,  56 => 15,  50 => 13,  48 => 12,  45 => 11,  41 => 10,  38 => 9,  34 => 7,  27 => 5,  25 => 4,  21 => 2,  19 => 1,);
    }
}
