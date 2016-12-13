var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('drink', {
    title: ''
  });
});

module.exports = router;
