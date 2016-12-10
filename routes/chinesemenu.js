var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('chinesemenu', {
    title: 'Hello World Koa!'
  });
});

module.exports = router;
