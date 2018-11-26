const uuid = require('uuid/v4');

// mock data
const tasks = [
    {
        name: 'Помыть посуду',
        id: uuid()
    },
    {
        name: 'Выбросить мусор',
        id: uuid()
    },
    {
        name: 'Сходить в магазин',
        id: uuid()
    }
];

async function showIndex(ctx) {
    await ctx.render('index', {
        tasks
    });
};

async function showAddTask(ctx) {
    await ctx.render('addTask');
}

async function handleAddTask(ctx) {
    const body = ctx.request.body;

    if (body.taskName) {
        tasks.push({
            name: body.taskName,
            id: uuid()
        });
    }

    ctx.redirect('/');
}

exports.showIndex = showIndex;
exports.showAddTask = showAddTask;
exports.handleAddTask = handleAddTask;
