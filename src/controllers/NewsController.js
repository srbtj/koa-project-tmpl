class NewsController {
  async newsList (ctx, next) {
    const arrs = {
      code: 200,
      data: {
        title: '新闻的标题',
        body: [
          { title: 'aaa', ctx: 'bbb' },
          { title: 'ccc', ctx: 'ddd' }
        ]
      }
    };
    ctx.body = await ctx.render('news.html', { data: arrs });
  };
}

module.exports = new NewsController();
