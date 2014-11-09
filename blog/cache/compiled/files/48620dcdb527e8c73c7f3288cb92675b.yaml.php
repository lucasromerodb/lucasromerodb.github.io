<?php
return [
    '@class' => "Grav\\Common\\File\\CompiledYamlFile",
    'filename' => "system/config/system.yaml",
    'modified' => 1415574014,
    'data' => [
        'home' => [
            'alias' => "/home"
        ],
        'pages' => [
            'theme' => "antimatter",
            'markdown_extra' => false,
            'order' => [
                'by' => "date",
                'dir' => "asc"
            ],
            'list' => [
                'count' => 20
            ],
            'dateformat' => [
                'short' => "jS M Y",
                'long' => "F jS \\a\\t g:ia"
            ],
            'process' => [
                'markdown' => true,
                'twig' => false
            ],
            'events' => [
                'page' => true,
                'twig' => true
            ]
        ],
        'cache' => [
            'enabled' => true,
            'check' => [
                'method' => "file"
            ],
            'driver' => "auto",
            'prefix' => "g"
        ],
        'twig' => [
            'cache' => true,
            'debug' => false,
            'auto_reload' => true,
            'autoescape' => false
        ],
        'assets' => [
            'css_pipeline' => false,
            'css_minify' => true,
            'css_minify_windows' => false,
            'css_rewrite' => true,
            'js_pipeline' => false,
            'js_minify' => true
        ],
        'errors' => [
            'display' => true,
            'log' => true
        ],
        'debugger' => [
            'enabled' => false,
            'twig' => true,
            'shutdown' => [
                'close_connection' => true
            ]
        ]
    ]
];
