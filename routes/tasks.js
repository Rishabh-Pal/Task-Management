const router = require("express").Router()

const { getAllTasks, createNewTask,
    getTaskById, deleteTaskById, updateTaskById } = require("../controllers/tasks")

router.route('/').get(getAllTasks).post(createNewTask)

router.route('/:id').get(getTaskById).patch(updateTaskById).delete(deleteTaskById)


module.exports = router;