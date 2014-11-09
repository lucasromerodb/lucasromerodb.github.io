<?php
return [
    '@class' => "Grav\\Common\\Config\\Config",
    'timestamp' => 1415575858,
    'checksum' => "4197535ee56e8cc97dec0bad7e442d25",
    'data' => [
        'streams' => [
            'schemes' => [
                'user' => [
                    'type' => "ReadOnlyStream",
                    'prefixes' => [
                        '' => [
                            '0' => "user"
                        ]
                    ]
                ],
                'blueprints' => [
                    'type' => "ReadOnlyStream",
                    'prefixes' => [
                        '' => [
                            '0' => "user://blueprints",
                            '1' => "system/blueprints"
                        ]
                    ]
                ],
                'config' => [
                    'type' => "ReadOnlyStream",
                    'prefixes' => [
                        '' => [
                            '0' => "user://config",
                            '1' => "system/config"
                        ]
                    ]
                ],
                'plugins' => [
                    'type' => "ReadOnlyStream",
                    'prefixes' => [
                        '' => [
                            '0' => "user://plugins"
                        ]
                    ]
                ],
                'plugin' => [
                    'type' => "ReadOnlyStream",
                    'prefixes' => [
                        '' => [
                            '0' => "user://plugins"
                        ]
                    ]
                ],
                'themes' => [
                    'type' => "ReadOnlyStream",
                    'prefixes' => [
                        '' => [
                            '0' => "user://themes"
                        ]
                    ]
                ],
                'cache' => [
                    'type' => "Stream",
                    'prefixes' => [
                        '' => [
                            '0' => "cache"
                        ]
                    ]
                ],
                'log' => [
                    'type' => "Stream",
                    'prefixes' => [
                        '' => [
                            '0' => "logs"
                        ]
                    ]
                ],
                'asset' => [
                    'type' => "ReadOnlyStream",
                    'paths' => [
                        '0' => "assets"
                    ]
                ],
                'image' => [
                    'type' => "ReadOnlyStream",
                    'paths' => [
                        '0' => "user://images"
                    ]
                ],
                'page' => [
                    'type' => "ReadOnlyStream",
                    'paths' => [
                        '0' => "user://pages"
                    ]
                ],
                'account' => [
                    'type' => "ReadOnlyStream",
                    'paths' => [
                        '0' => "user://accounts"
                    ]
                ]
            ]
        ],
        'system' => [
            'base_url_absolute' => "http://localhost/PERSONAL/lucas-web-blog",
            'base_url_relative' => "/PERSONAL/lucas-web-blog",
            'home' => [
                'alias' => "/blog"
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
                'debug' => true,
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
        ],
        'plugins' => [
            'pagination' => [
                'enabled' => true,
                'path' => "/blog",
                'built_in_css' => true
            ],
            'error' => [
                'enabled' => true,
                'routes' => [
                    '404' => "/error"
                ]
            ],
            'problems' => [
                'enabled' => true,
                'built_in_css' => true
            ],
            'breadcrumbs' => [
                'enabled' => true,
                'built_in_css' => true,
                'show_all' => true
            ],
            'taxonomylist' => [
                'enabled' => true,
                'route' => "/blog"
            ],
            'feed' => [
                'enabled' => true,
                'limit' => 10,
                'description' => "My Feed Description",
                'lang' => "en-us",
                'length' => 500
            ],
            'random' => [
                'enabled' => true,
                'route' => "/random",
                'filters' => [
                    'category' => "blog"
                ]
            ],
            'archives' => [
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
            ],
            'sitemap' => [
                'enabled' => true,
                'route' => "/sitemap"
            ]
        ],
        'site' => [
            'title' => "Lucas",
            'author' => [
                'name' => "Lucas",
                'email' => "lucasromerodb@gmail.com"
            ],
            'taxonomies' => [
                '0' => "category",
                '1' => "tag",
                '2' => "month"
            ],
            'blog' => [
                'route' => "/blog"
            ],
            'metadata' => [
                'description' => "Espacio personal para publicar cosas interesantes"
            ],
            'summary' => [
                'size' => 300
            ],
            'routes' => [
                '/something/else' => "/blog/sample-3",
                '/another/one/here' => "/blog/sample-3"
            ]
        ],
        'media' => [
            'defaults' => [
                'type' => "file",
                'thumb' => "media/thumb.png",
                'mime' => "application/octet-stream",
                'image' => [
                    'filters' => [
                        'default' => [
                            '0' => "enableProgressive"
                        ]
                    ]
                ]
            ],
            'jpg' => [
                'type' => "image",
                'thumb' => "media/thumb-jpg.png",
                'mime' => "image/jpeg"
            ],
            'jpeg' => [
                'type' => "image",
                'thumb' => "media/thumb-jpeg.png",
                'mime' => "image/jpeg"
            ],
            'png' => [
                'type' => "image",
                'thumb' => "media/thumb-png.png",
                'mime' => "image/png"
            ],
            'gif' => [
                'type' => "image",
                'thumb' => "media/thumb-gif.png",
                'mime' => "image/gif"
            ],
            'mp4' => [
                'type' => "video",
                'thumb' => "media/thumb-mp4.png",
                'mime' => "video/mp4"
            ],
            'mov' => [
                'type' => "video",
                'thumb' => "media/thumb-mov.png",
                'mime' => "video/quicktime"
            ],
            'm4v' => [
                'type' => "video",
                'thumb' => "media/thumb-m4v.png",
                'mime' => "video/x-m4v"
            ],
            'swf' => [
                'type' => "video",
                'thumb' => "media/thumb-swf.png",
                'mime' => "video/x-flv"
            ],
            'txt' => [
                'type' => "file",
                'thumb' => "media/thumb-txt.png",
                'mime' => "text/plain"
            ],
            'doc' => [
                'type' => "file",
                'thumb' => "media/thumb-doc.png",
                'mime' => "application/msword"
            ],
            'html' => [
                'type' => "file",
                'thumb' => "media/thumb-html.png",
                'mime' => "text/html"
            ],
            'pdf' => [
                'type' => "file",
                'thumb' => "media/thumb-pdf.png",
                'mime' => "application/pdf"
            ],
            'zip' => [
                'type' => "file",
                'thumb' => "media/thumb-zip.png",
                'mime' => "application/zip"
            ],
            'gz' => [
                'type' => "file",
                'thumb' => "media/thumb-gz.png",
                'mime' => "application/gzip"
            ]
        ]
    ]
];
