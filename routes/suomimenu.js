var router = require('koa-router')();
router.get('/', function *(next) {
  console.log('root!!!!!!!!:     ');
  yield this.render('suomimenu', {
 		title: 'Hello World Koa!'
  });
});
router.get('/:id', function *(next) {
  var page=this.params.id?'suomimenu'+this.params.id:'suomimenu';
  console.log('page!!!!!!!!:     '+page);

  yield this.render(page, {
 		title: 'Hello World Koa!'
  });

});

module.exports = router;
