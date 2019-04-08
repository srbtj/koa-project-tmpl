const path = require('path');
const service = require(path.resolve(__dirname, '../services/api'));
class IndexController {
  async indexList (ctx, next) {
    const result = await service.GetAllNews(1, 10);
    // console.log(result);
    // const data = {
    //   title: '首页',
    //   content: '首页内容'
    // };
    ctx.body = await ctx.render('index.html', {
      data: result.list
    });
    // ctx.body = '首页内容111';
  }
}

module.exports = new IndexController();
