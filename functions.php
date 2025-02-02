<?php


function enqueue_react_script() {
   if (version_compare(get_bloginfo('version'), '6.6', '<')) {
        wp_enqueue_script(
            'react-jsx-runtime-polyfill',
            get_template_directory_uri() . '/build/react-jsx-runtime-polyfill.js',
            ['react'],
            '1.0.0',
            true
        );
    }

    wp_enqueue_script(
        'react-hello-world',
        get_template_directory_uri() . '/build/index.js',
        ['wp-element'],
        time(),
        true
    );
}
add_action('wp_enqueue_scripts', 'enqueue_react_script');
