# Claire Sun Studio

[Claire Sun Studio](clairesun.com) is Minghua Sun's online portfolio, built with React, using Create React App.

## Quick start

- $ ``npm i``
- $ ``npm start``
- Browse to http://localhost:3000, or the custom port shown in the output of npm start.

## System Requirements

- node.js, currently standardized on version 7.6.0
- npm, currently standardized on version 5.6.0
- To run tests locally, you will need to install [Watchman](https://facebook.github.io/watchman/docs/install.html).
- That's it! All other dependencies should be included when you run ``npm i``.
- While not a strict requirement, we **highly recommend** the use of nvm to facilitate easily switching between versions of nodejs. Instructions on getting it set up are [here](https://github.com/creationix/nvm#installation).


## Useful commands

The most common commands can be found in the package.json's ``scripts`` section:

$ ``npm start`` Starts local dev server

$ ``npm run build`` Builds optimized prod app in ./build

$ ``npm test`` Starts Jest test suite in watch mode

$ ``npm run lint`` and ``npm run lint-fix`` Runs eslint code style checks, with the ``-fix`` added it will attempt to auto-correct any found issues.

## Production build testing

By default, ``npm start`` will kick off a develop environment that hot reloads as you make changes to the codebase. This is great, but sometimes you want to test the production build locally. To do so, you can use the following:

$ ``npm i -g http-server``

$ ``npm run build``

$ ``serve ./build``

This will spin up a fully optimised production build in your browser for testing.

## Production bundle explorer

Source map exploring is useful for analyzing the production js bundles and looking for potential optimizations. It shows you exactly how much of your production bundles are being used by what dependency in a visual way that makes it easy to spot bloat. To open the explorer on a prod build in your browser, use the following:

$ ``npm i -g source-map-explorer``

$ ``npm run build``

$ ``source-map-explorer build/static/js/main.*``


## Code coverage reports

We do not currently run full test coverage reports as part of our CI, but you can generate a report by running:

$ ``npm run test -- --coverage`` (note the double dashes)

## Adding dependencies

We manage all dependencies using npm in the normal way, and we follow the typical convention of committing our package-lock.json file as well. This means that if you install a new dependency, your workflow will look something like this:

$ ``npm i purgecss`` (Installs the new dependency, if you run ``git status`` after this you should see both package.json and package-lock.json showing changes).

$ ``git add package.json package-lock.json``

$ ``git commit -m 'Added purgecss library'``

## Release process

The site is hosted in S3 with Cloudfront added.

- $ ``npm run build`` (Builds production app)
- $ ``aws s3 sync build s3://clairesun.com --exclude "static/*" --delete --cache-control max-age=604800`` (Syncs all build files except build/static to S3 adding cache-control headers for max-age: 7 days.)
- ``run: aws s3 sync build s3://clairesun.com --exclude "*" --include "static/*" --delete --cache-control max-age=31536000`` (Syncs all build files in build/static to S3 adding cache-control headers for max-age: 1 year.)
- $ ``aws configure set preview.cloudfront true`` (Enables CloudFront invalidation commands)
- $ ``aws cloudfront create-invalidation --distribution-id
[!!PROD_DISTRIBUTION_ID_HERE!!] --paths '/*'`` (Invalidates CloudFront for prod box)
