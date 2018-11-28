const Koa = require('koa');
const Router = require('koa-router');
const path = require('path');
const render = require('koa-ejs');
const serve = require('koa-static');
const app = new Koa();
const router = new Router();
const bodyParser = require('koa-bodyparser');
const { showIndex, showAddTask, handleAddTask } = require('./routes');

const { config } = require('./utils/config');

const { connectDb } = require('./utils/db');

app.use(bodyParser());

// serve static
app.use(serve('.'));

render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debut: true
});

// routes
router.get('/', showIndex);
router.get('/add-task', showAddTask);
router.post('/add-task', handleAddTask);


app.use(router.routes()).use(router.allowedMethods());

exports.app = app;
