# Contributing

Contributings are always welcome, nothing specific. Since there are no unit or e2e tests, you need to provide a link to working example of a bugfix or a feature. Just use gh-pages branch when you make pull request.

# How to run and make changes

First of all you need to install [NodeJS 6](https://nodejs.org/en/) or above. If you already have another version of NodeJS, install [NVM](https://github.com/creationix/nvm) then run ``nvm install 6``. After, you'll need to run ``nvm use 6`` which switches NodeJS to v6 and NPM to v3. Then install needed deps via ``npm install`` (it also compiles browser version of UglifyJS). That's it, your environment is installed. The project is bundled by Webpack, but it's installed locally.

To run development server you need to run ``npm run dev-server`` and open [http://localhost:8100](http://localhost:8100).

If you need to build real app (without dev server stuff) run ``npm run bundle``. This command will be run automatically before commit.

Styles are placed in **/pcss/** folder, JavaScript source you can find at **/src/** folder.
