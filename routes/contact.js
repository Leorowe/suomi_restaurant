var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('contact', {
    title: 'Hello World Koa!'
  });
});

module.exports = router;
