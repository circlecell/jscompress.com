
/**
 * Module dependencies.
 */

var express = require('express');

// Formidable multiple file uploads
// @link https://github.com/felixge/node-formidable/
var formidable = require('formidable');

// UglifyJS
// @link https://github.com/mishoo/UglifyJS/
var ujs_jsp = require("uglify-js").parser;
var ujs_pro = require("uglify-js").uglify;

// Express
var app = module.exports = express.createServer();

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
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
    err: false
  });
});

app.post('/compress', function(req, res) {
  var err = false;
  var js_in = req.body.js_in;

  // Compress JS
  try {
    var ast = ujs_jsp.parse(js_in); // parse code and get the initial AST
    ast = ujs_pro.ast_mangle(ast); // get a new AST with mangled names
    //ast = ujs_pro.ast_squeeze(ast); // get an AST with compression optimizations
    var js_out = ujs_pro.gen_code(ast); // compressed code here
  } catch(e) {
    err = e.message;
  }

  // Template
  res.render('index', {
    js_in: js_in,
    js_out: js_out,
    err: err
  });
});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
