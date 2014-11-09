<?php

/* partials/sidebar.html.twig */
class __TwigTemplate_6f236883f9f48c6be29b9b6e004e438be45aea46128fb1c4438e10b5c32d0ddf extends Twig_Template
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
        echo "<div class=\"sidebar-content\">
\t<h4>Random Article</h4>
\t<a class=\"button\" href=\"";
        // line 3
        echo (isset($context["base_url_relative"]) ? $context["base_url_relative"] : null);
        echo "/random\"><i class=\"fa fa-retweet\"></i> I'm Feeling Lucky!</a>
</div>
<div class=\"sidebar-content\">
\t<h4>Some Text Widget</h4>
\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
</div>
<div class=\"sidebar-content\">
    <h4>Popular Tags</h4>
    ";
        // line 11
        $this->env->loadTemplate("taxonomylist.html.twig")->display(array_merge($context, array("taxonomy" => "tag")));
        // line 12
        echo "</div>
<div class=\"sidebar-content\">
    <h4>Archives</h4>
\t";
        // line 15
        $this->env->loadTemplate("partials/archives.html.twig")->display($context);
        // line 16
        echo "</div>
<div class=\"sidebar-content syndicate\">
    <h4>Syndicate</h4>
    <a class=\"button\" href=\"";
        // line 19
        echo (isset($context["base_url"]) ? $context["base_url"] : null);
        echo ".atom\"><i class=\"fa fa-rss-square\"></i> Atom 1.0</a>
    <a class=\"button\" href=\"";
        // line 20
        echo (isset($context["base_url"]) ? $context["base_url"] : null);
        echo ".rss\"><i class=\"fa fa-rss-square\"></i> RSS</a>
</div>
";
    }

    public function getTemplateName()
    {
        return "partials/sidebar.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  52 => 20,  48 => 19,  43 => 16,  41 => 15,  36 => 12,  34 => 11,  23 => 3,  19 => 1,);
    }
}
