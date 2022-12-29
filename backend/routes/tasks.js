const router = require('express').Router({mergeParams:true});
const validators = require('../../backend/validators');

const {getTasks, postTasks, patchColumn, deleteTask} = require('../controllers/tasksController');

router.get('/tasks', getTasks);
router.post('/tasks', validators.taskFormValidator, postTasks);
router.patch('/:column', patchColumn);
router.delete('/:id', deleteTask);

module.exports = router;