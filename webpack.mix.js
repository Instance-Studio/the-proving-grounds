let mix = require("laravel-mix");
require("laravel-mix-copy-watched");

mix.sass("src/scss/main.scss", "css").options({ processCssUrls: false });

mix.copyWatched("src/img/**/*", "dist/img");

mix.setPublicPath("dist");

// Change to your url
mix.browserSync("the-proving-grounds.test");
