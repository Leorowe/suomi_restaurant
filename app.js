var app = require('koa')()
  , koa = require('koa-router')()
  , logger = require('koa-logger')
  , json = require('koa-json')
  , views = require('koa-views')
  , onerror = require('koa-onerror');

var index = require('./routes/index');
var contact = require('./routes/contact');
var chinesemenu = require('./routes/chinesemenu');
var suomimenu = require('./routes/suomimenu');
var drink = require('./routes/drink')
// global middlewares
app.use(views('views', {
  root: __dirname + '/views',
  default: 'ejs'
}));
app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(require('koa-static')(__dirname + '/public'));

// routes definition
koa.use('/', index.routes(), index.allowedMethods());
// koa.use('/index*', index.routes(), index.allowedMethods());
koa.use('/chinesemenu*', chinesemenu.routes(), chinesemenu.allowedMethods());
koa.use('/suomimenu', suomimenu.routes(), suomimenu.allowedMethods());
koa.use('/contact', contact.routes(), contact.allowedMethods());
koa.use('/drink',drink.routes(),drink.allowedMethods());
// mount root routes
app.use(koa.routes());

app.on('error', function(err, ctx){
  logger.error('server error', err, ctx);
});

module.exports = app;
