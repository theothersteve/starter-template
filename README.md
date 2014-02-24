# Starter Template

## Getting Started

This template uses html 5 boilerplate as a base, it also uses grunt to compile sass and compass to css.

To begin using this template you will need to have npm installed. first run npm install from the command line.

## Sass/Compass

Once the node modules are installed you can run grunt watch to begin using sass and compass. The sass directory has some partials set up, however you can disregard these if you wish and create partials of your own just remember to import them to your main.scss file.

## Grunt

There are only two grunt tasks set up initially, watch and compass. Compass has sub tasks set up for dev and production, grunt watch will compile the css into a root css directory for use in development. To compile for production run compass:dist which will compile to a css directory within a dist directory. Feel free to add your own grunt tasks.