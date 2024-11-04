const path = require("path");

const mix = require('laravel-mix');

mix.alias({
    '@': path.join(__dirname, 'resources/js')
});

// backend webpack
// ==============>
mix.js('resources/Backend/js/app.js', 'public/js').vue();
mix.sass('resources/Backend/css/app.scss', 'public/css');