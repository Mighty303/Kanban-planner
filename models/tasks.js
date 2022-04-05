const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name:{type:String, required:true},
    tags:{type:String, required:true},
    description:{type:String}
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;