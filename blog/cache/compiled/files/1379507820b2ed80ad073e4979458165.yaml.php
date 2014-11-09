<?php
return [
    '@class' => "Grav\\Common\\File\\CompiledYamlFile",
    'filename' => "user/plugins/archives/archives.yaml",
    'modified' => 1414800919,
    'data' => [
        'enabled' => true,
        'built_in_css' => true,
        'date_display_format' => "F Y",
        'show_count' => true,
        'limit' => 12,
        'order' => [
            'by' => "date",
            'dir' => "desc"
        ],
        'filters' => [
            'category' => "blog"
        ]
    ]
];
