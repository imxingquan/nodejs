const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello1 你好 Koa';
});

app.listen(3000);
console.log('程序启动，监听端口3000');