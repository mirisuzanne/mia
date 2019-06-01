# mia

This site is built using:

- HTML, of course
- CSS w/ a load of Grids & Variables
- Eleventy JS w/ Markdown & Nunjucks
- Sass w/ OddBird's Accoutrement & Herman
- A lot of ideas from a lot of cool people

## Develop:

Install dependencies:

```
yarn
```

Compile and run [Eleventy](http://www.11ty.io) server,
with a watcher for Sass files:

```
gulp
```

The site will be compiled into `_site/`
for netlify deployment,
and the served site will be available at
`localhost:8080` or e.g. `mia.hexxie.com:8080`.

You can also run individual commands:

```
# build the static site for production
gulp build

# run the server
gulp serve

# minify images
gulp imagemin

# compile sass
gulp sass

# lint sass
gulp sasslint

# format sass
gulp prettier

# compile sass docs
gulp sassdoc

# watch sass files (lint & compile)
gulp watch

# watch sass files (docs & lint & compile)
gulp sassdoc-watch
```

Sass Docs are compiled into the `_site/style/` folder,
which is then available at the URL: `/style/`.
