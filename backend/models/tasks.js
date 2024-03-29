const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    column: {type:String, default:'To Do'},
    name: {type:String, required:true},
    description: {type:String, required:true},
    date: {type:String},
    index: {type: Number, default: 0}
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;