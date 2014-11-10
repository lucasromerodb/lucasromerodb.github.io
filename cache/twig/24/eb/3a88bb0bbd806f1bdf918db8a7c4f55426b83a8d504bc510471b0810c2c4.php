<?php

/* partials/navigation.html.twig */
class __TwigTemplate_24eb3a88bb0bbd806f1bdf918db8a7c4f55426b83a8d504bc510471b0810c2c4 extends Twig_Template
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
        // line 16
        echo "
<ul class=\"navigation\">
    ";
        // line 18
        if ($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "themes", array()), "antimatter", array()), "dropdown", array()), "enabled", array())) {
            // line 19
            echo "        ";
            echo $this->getAttribute($this, "loop", array(0 => (isset($context["pages"]) ? $context["pages"] : null)), "method");
            echo "
    ";
        } else {
            // line 21
            echo "        ";
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["pages"]) ? $context["pages"] : null), "children", array()));
            foreach ($context['_seq'] as $context["_key"] => $context["page"]) {
                // line 22
                echo "            ";
                if ($this->getAttribute($context["page"], "visible", array())) {
                    // line 23
                    echo "                ";
                    $context["current_page"] = ((($this->getAttribute($context["page"], "active", array()) || $this->getAttribute($context["page"], "activeChild", array()))) ? ("active") : (""));
                    // line 24
                    echo "                <li class=\"";
                    echo (isset($context["current_page"]) ? $context["current_page"] : null);
                    echo "\"><a href=\"";
                    echo $this->getAttribute($context["page"], "url", array());
                    echo "\">";
                    echo $this->getAttribute($context["page"], "menu", array());
                    echo "</a></li>
            ";
                }
                // line 26
                echo "        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['page'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 27
            echo "    ";
        }
        // line 28
        echo "</ul>           

";
    }

    // line 1
    public function getloop($__page__ = null)
    {
        $context = $this->env->mergeGlobals(array(
            "page" => $__page__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 2
            echo "    ";
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "children", array()));
            foreach ($context['_seq'] as $context["_key"] => $context["p"]) {
                // line 3
                echo "        ";
                if ($this->getAttribute($context["p"], "visible", array())) {
                    // line 4
                    echo "            ";
                    $context["current_page"] = ((($this->getAttribute($context["p"], "active", array()) || $this->getAttribute($context["p"], "activeChild", array()))) ? ("active") : (""));
                    // line 5
                    echo "            <li class=\"";
                    echo (isset($context["current_page"]) ? $context["current_page"] : null);
                    echo "\">
                <a href=\"";
                    // line 6
                    echo $this->getAttribute($context["p"], "url", array());
                    echo "\">";
                    echo $this->getAttribute($context["p"], "menu", array());
                    echo "</a>
                ";
                    // line 7
                    if (($this->getAttribute($this->getAttribute($context["p"], "children", array()), "count", array()) > 0)) {
                        // line 8
                        echo "                    <ul>
                        ";
                        // line 9
                        echo $this->getAttribute($this, "loop", array(0 => $context["p"]), "method");
                        echo "
                    </ul>
                ";
                    }
                    // line 12
                    echo "            </li>
        ";
                }
                // line 14
                echo "    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['p'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    public function getTemplateName()
    {
        return "partials/navigation.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  115 => 14,  111 => 12,  105 => 9,  102 => 8,  100 => 7,  94 => 6,  89 => 5,  86 => 4,  83 => 3,  78 => 2,  67 => 1,  61 => 28,  58 => 27,  52 => 26,  42 => 24,  39 => 23,  36 => 22,  31 => 21,  25 => 19,  23 => 18,  19 => 16,);
    }
}
