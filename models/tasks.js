const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tasksModel = new Schema({
    name: {
        type: String,
        required: true, 
    }
});

module.exports.tasksModel = mongoose.model('Tasks', tasksModel);
