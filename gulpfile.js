/**
 * Created by Anna on 30.05.2017.
 */
let elixir = require('laravel-elixir');

require('laravel-elixir-browserify-official');
require('laravel-elixir-vueify');;
// require('laravel-elixir-vue');

elixir(function(mix) {
    mix.browserify('app.js');
});

// elixir(function(mix) {
//     mix.webpack('app.js'); // resources/assets/js/main.js
// });