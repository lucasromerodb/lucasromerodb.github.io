<?php
return [
    '@class' => "Grav\\Common\\File\\CompiledYamlFile",
    'filename' => "system/config/site.yaml",
    'modified' => 1414800915,
    'data' => [
        'title' => "Grav",
        'author' => [
            'name' => "John Appleseed",
            'email' => "john@email.com"
        ],
        'taxonomies' => [
            '0' => "category",
            '1' => "tag"
        ],
        'blog' => [
            'route' => "/blog"
        ],
        'metadata' => [
            'description' => "My Grav Site"
        ],
        'summary' => [
            'size' => 300
        ],
        'routes' => [
            '/something/else' => "/blog/sample-3",
            '/another/one/here' => "/blog/sample-3"
        ]
    ]
];
