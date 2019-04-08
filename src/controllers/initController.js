const indexctrl = require('./IndexController');
const newsctrl = require('./NewsController');
const initCtrl = {
  getAllRouters (app, router) {
    router
      .get('/', indexctrl.indexList)
      .get('/index', indexctrl.indexList)
      .get('/index.html', indexctrl.indexList)
      .get('/news', newsctrl.newsList);

    app
      .use(router.routes())
      .use(router.allowedMethods());
  }
}
// module.exports.getAllRouters = initCtrl.getAllRouters;
module.exports = initCtrl;