const { showIndex } = require('./showIndexRoute');
const { showAddTask } = require('./showAddTaskRoute');
const { handleAddTask } = require('./handleAddTaskRoute');

const { tasksModel } = require('../models/tasks');

exports.showIndex = showIndex;
exports.showAddTask = showAddTask;
exports.handleAddTask = handleAddTask;
