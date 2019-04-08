const log4js = require('koa-log4');
const path = require('path');

log4js.configure({
  appenders: {
    out: {
      type: 'console'
    },
    access: {
      type: 'dateFile',
      pattern: '-yyyy-MM-dd',
      filename: path.join(__dirname, '../logs/access.log')
    },
    application: {
      type: 'dateFile',
      pattern: '-yyyy-MM-dd',
      filename: path.join(__dirname, '../logs/application.log')
    }
  },
  categories: {
    default: { appenders: ['out'], level: 'info' },
    access: { appenders: ['access'], level: 'info' },
    application: { appenders: ['application'], level: 'warn' }
  }
});

module.exports.accessLogger = () => log4js.koaLogger(log4js.getLogger('access'));
module.exports.logger = log4js.getLogger('application');