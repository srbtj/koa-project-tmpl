const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const render = require('koa-swig');
const co = require('co');
const sass = require('koa-sass');
const sassMiddleware = require('node-sass-middleware');
const router = require('koa-router')();
const initCtrl = require('./controllers/initController');
const { logger, accessLogger } = require('./config/log4js-config');
const swigConfig = require('./config/swig-config');
const app = new Koa();

// app.use(sassMiddleware({
//   src: path.join(__dirname, 'public/sass'),
//   dest: path.join(__dirname, 'public/styles'),
//   debug: true,
//   outputStyle: 'compressed'
// }));
// 加载scss资源
app.use(sass({
  src: __dirname + '/public/sass',
  dest: __dirname + '/public/styles'
  // dest: path.join(__dirname, './styles')
}));
// 加载静态资源
app.use(static(path.join(__dirname, 'public')));
// 加载日志
app.use(accessLogger());
// 配置模板内容
app.context.render = co.wrap(render(swigConfig));
// 加载路由
initCtrl.getAllRouters(app, router);
// 启动监听
app.listen(9999, function () {
  console.log('监听服务成功...');
});
