const { tasksModel } = require('../models/tasks');

async function showIndex(ctx) {
    const tasks = await tasksModel.find({}, (err, tasks) => tasks);
    await ctx.render('index', {
        tasks
    });
};

exports.showIndex = showIndex;
