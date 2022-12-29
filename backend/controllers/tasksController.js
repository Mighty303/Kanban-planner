const Task = require('../models/tasks');

const getTasks = (req, res)=> {
    Task.find({}).exec()
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
};

const postTasks = (req, res)=> {
    let task = new Task(req.body);

    const saveTask = async taskSchema => {
        await taskSchema.save();
        res.status(201).json(taskSchema);
    }
    saveTask(task)
    .then(result=> console.log('success'))
    .catch(err => console.log(err));
};

const patchColumn = (req, res) => {
    const filter = { _id: req.body._id};
    const doc = {$set: {column: req.params.column, index: req.body.index}};
    Task.findOneAndUpdate(filter, doc, {new: true}).exec()
    .then(result => {
        result.index = req.body.index;
        result.column = req.params.column;
        res.status(200).send(result);
    })
    .catch(err => console.log(err));
};

const deleteTask = (req, res)=> {
    Task.findByIdAndDelete(req.params.id).exec()
    .then(result => {
        res.status(204).send(result);
    })
    .catch(err => console.log(err));
};

module.exports = {
    getTasks,
    postTasks,
    patchColumn,
    deleteTask
};