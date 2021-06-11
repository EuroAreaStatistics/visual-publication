Digital publication: Inflation
==============================

These are the sources used to build the digitial publication "Inflation".
It has been developed in JavaScript using Node.js version 12.
The built files in the `public` folder consist of static HTML, CSS and JavaScript which can be run on any web server.

To get started, install the npm packages with `npm install`.

Following are some useful commands:

`npm run build` rebuilds all files from the sources.

`npm run update` updates the data files.

`npm run start` Starts a local server at http://localhost:3000/

`npm run` prints a complete list of run scripts.

The data files can be updated periodically with wget, e.g.:
```sh
   wget --header='Accept: application/json' -N -P public/data -nH -x --cut-dirs=2 -i public/urls.txt
```
