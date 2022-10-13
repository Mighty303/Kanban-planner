const router = require('express').Router({mergeParams:true});

const tasksRouter = require('./tasks');;

router.use('/v1', tasksRouter);

module.exports = router;