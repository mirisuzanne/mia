# mia
eleventy source for miriam.codes

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
# build the static site
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

# watch sass files (lint & docs & compile)
gulp watch
```

Sass Docs are compiled into the `_site/style/` folder,
which is then available at the URL: `/style/`.
