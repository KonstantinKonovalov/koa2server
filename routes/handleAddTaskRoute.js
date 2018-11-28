const { tasksModel } = require('../models/tasks');

async function handleAddTask(ctx) {
    const { body } = ctx.request;

    if (body.taskName) {
        tasksModel.create({
            name: body.taskName
        });
    }

    ctx.redirect('/');
}

exports.handleAddTask = handleAddTask;
