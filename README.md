# mia

This site is built using:

- HTML, of course
- CSS w/ a load of Grids & Variables
- [Eleventy](https://www.11ty.dev) JS w/ Markdown & Nunjucks
- Sass w/ OddBird's [Accoutrement](https://www.oddbird.net/accoutrement/) &
  [Herman](https://www.oddbird.net/herman/)
- [CircleCI](https://circleci.com/) for continuous integration
- [Netlify](https://www.netlify.com/) for deployment
- A lot of ideas from a lot of cool people

## Develop:

Install node & [yarn](https://yarnpkg.com/en/docs/install#mac-stable):

We recommend using [nvm](https://github.com/nvm-sh/nvm) for node version
management. Once you have it installed, run `nvm install` (once per active
shell) to use the correct version of node for OddLeventy development.

Install dependencies:

```
yarn
```

Compile and run [Eleventy](https://www.11ty.dev) server, with a watcher for file
changes:

```
yarn serve
```

The site will be compiled into `_site/` and available at http://localhost:8080.

You can also run individual commands:

```
# build the static site for development
yarn build

# build the static site for production
yarn prod

# format and lint all files
yarn lint

# compile sass
yarn sass

# compile js
yarn js

# format and lint sass
yarn lint:sass

# format and lint js
yarn lint:js

# compile sass docs
yarn sassdoc
```

Sass Docs are compiled into the `_site/style/` folder, which is then available
at the URL: `/style/`.

## Deployment

The site is auto-deployed on [Netlify](https://www.netlify.com/) from the
`master` branch on GitHub. Deploys are automated on push to master.

For testing production locally, run `yarn prod:serve` and access the site at
http://localhost:8080.

Use branches and PRs for changes, and Netlify will create staging previews for
functional review before merge.
