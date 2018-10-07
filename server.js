const Koa = require('koa');
const serve = require('koa-static');
const debug = require('debug')('app');

const app = new Koa();
const PORT = process.env.PORT || 8080;

app.use(serve(`${__dirname}/public`));

app.listen(PORT);
debug(`Server listening at https://localhost:${PORT}`);
