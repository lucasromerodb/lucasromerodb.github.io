<?php
return [
    '@class' => "Grav\\Common\\File\\CompiledYamlFile",
    'filename' => "user/plugins/breadcrumbs/blueprints.yaml",
    'modified' => 1414800920,
    'data' => [
        'name' => "Breadcrumbs",
        'version' => "1.1.1",
        'description' => "The **Breadcrumbs** plugin provides a simple method to display the depth of your content/navigation structure.",
        'icon' => "caret-square-o-right",
        'author' => [
            'name' => "Team Grav",
            'email' => "devs@getgrav.org",
            'url' => "http://getgrav.org"
        ],
        'homepage' => "https://github.com/getgrav/grav-plugin-breadcrumbs",
        'demo' => "http://demo.getgrav.org/blog-skeleton",
        'keywords' => "breadcrumbs, plugin, navigation, depth",
        'bugs' => "https://github.com/getgrav/grav-plugin-breadcrumbs/issues",
        'license' => "MIT",
        'form' => [
            'validation' => "strict",
            'fields' => [
                'enabled' => [
                    'type' => "toggle",
                    'label' => "Plugin status",
                    'highlight' => 1,
                    'default' => 1,
                    'options' => [
                        '1' => "Enabled",
                        '0' => "Disabled"
                    ],
                    'validate' => [
                        'type' => "bool"
                    ]
                ],
                'built_in_css' => [
                    'type' => "toggle",
                    'label' => "Use built in CSS",
                    'highlight' => 1,
                    'default' => 1,
                    'options' => [
                        '1' => "Enabled",
                        '0' => "Disabled"
                    ],
                    'validate' => [
                        'type' => "bool"
                    ]
                ],
                'show_all' => [
                    'type' => "toggle",
                    'label' => "Show even with one item",
                    'highlight' => 1,
                    'default' => 1,
                    'options' => [
                        '1' => "Enabled",
                        '0' => "Disabled"
                    ],
                    'validate' => [
                        'type' => "bool"
                    ]
                ]
            ]
        ]
    ]
];
