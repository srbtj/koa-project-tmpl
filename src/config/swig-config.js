const path = require('path');
module.exports = {
  root: path.join(__dirname, '../views'),
  autoescape: true,
  cache: false, // 开发环境: false, 生产环境: true
  ext: 'html',
  writeBody: false
};
