import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Homepage from './components/Homepage';
import express from 'express';
import bodyParser from 'body-parser';
import UglifyJS from 'uglify-js';
import _ from 'lodash';


let app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Parse application/json
app.use(bodyParser.json());

// No need to advertise our tech stack
app.set('x-powered-by', false);


// ROUTES ---------------------------------------------

// GET /
app.get('/', function (req, res) {
  res.render('layout', {
    content: ReactDOMServer.renderToString(<Homepage />)
  });
});

/**
 * Format JSON response from given input JavaScript code to minify
 */
function sendResponseForInputJS(res, inputJS) {
  let outputJS = '';
  let err;

  // Ensure we have some code
  if (_.isEmpty(inputJS)) {
    res.status(400).send({ error: 'Input code is empty' });
    return;
  }

  try {
    outputJS = UglifyJS.minify(inputJS, { fromString: true });
  } catch(e) {
    res.status(400).send({ error: e.message });
    return;
  }

  res.status(200).send({
    code: outputJS.code,
    map: outputJS.map
  });
}

// Compress given JS
app.post('/api/js', function (req, res) {
  // Ensure request has content
  if (!req.body && !req.body.code) {
    res.status(400).send({ error: 'No code has been input. Please input code with the "code" key in a JSON object.' });
    return;
  }

  sendResponseForInputJS(res, req.body.code);
});

// Upload and compress several JS files together
app.post('/api/jsfiles', function (req, res) {
  // Ensure request has content
  if (!req.files) {
    res.status(400).send({ error: 'No files have been uploaded' });
    return;
  }

  let inputJS = '';

  // If we have uploaded files
  let files = req.files;
  let i = 0;
  let len = Object.keys(files).length;
  if(files && len > 0) {
    //console.log('= GOT FILES (' + len + ')');
    for(key in files) {
      let file = files[key];
      // Synchronous file reads to ensure they stay in the order they were uploaded
      inputJS += "// --- file[" + file.name + "] ---\n\n" + fs.readFileSync(file.path) + "\n\n";
    }
  }

  sendResponseForInputJS(res, inputJS);
});


// SERVER ---------------------------------------------

// Start server
let server = app.listen(1337, function () {
  let host = server.address().address;
  let port = server.address().port;

  if (host === '::') {
    host = 'localhost';
  }

  console.log('Example app listening at http://%s:%s', host, port);
});
