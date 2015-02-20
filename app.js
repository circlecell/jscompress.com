
/**
 * Module dependencies.
 */

var express = require('express');
var ejs_engine = require('ejs-locals');

var http = require('http'),
    sys = require('sys'),
    fs = require('fs');

// UglifyJS
// @link https://github.com/mishoo/UglifyJS2
var UglifyJS = require("uglify-js");

// Express
var app = express();

// Configuration
app.configure(function(){
  // use ejs-locals for all ejs templates:
  app.engine('ejs', ejs_engine);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.limit('10mb'));
  app.use(express.bodyParser({ keepExtensions: true }));
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
app.get('/', function(req, res){
  res.render('index', {
    title: 'JSCompress.com',
    js_in: '',
    js_out: '',
    test_out: 'if ($( this ).html() == "&lt;&lt;") {  }',
    err: false
  });
});

app.post('/', function(req, res) {
  /* console.log('Receiving POST...'); */

  // Variables
  var err = false,
      js_in = '',
      js_out = '',
      finished = false;

  // Finish request
  var finish = function(_js_in) {
    // Can't run more than once
    if(finished) {
      return;
    }
    /* console.log('---------------------------\n', 'Finished'); */

    finished = true;

    // Compress JS
    if(_js_in) {
      try {
        js_out = UglifyJS.minify(_js_in, { fromString: true }).code; // compressed code here
      } catch(e) {
        err = e.message;
      }
    } else {
      err = "No javascript input was found";
    }

    // Template
    res.render('index', {
      js_in: js_in,
      js_out: js_out,
      err: err
    });
  };

  // JS input only
  try {
    if("undefined" != typeof(req.body.js_in)) {
      finish(req.body.js_in);
    }
  } catch (e) {}

    // Direct JS string
    if(req.body.js_in) {
      js_in += req.body.js_in;
    }

    // If we have uploaded files
    var files = req.files;
    var i = 0;
    var len = Object.keys(files).length;
    if(files && len > 0) {
      //console.log('= GOT FILES (' + len + ')');
      for(key in files) {
        var file = files[key];
        // Synchronous file reads to ensure they stay in the order they were uploaded
        js_in += "// --- file[" + file.name + "] ---\n\n" + fs.readFileSync(file.path) + "\n\n";
      }
    }
    finish(js_in);
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});
