const express = require('express');
const router = express.Router();

const taskController = require('../controllers/tasks');
const auth = require("../middleware/auth");

router.post("/", auth, taskController.createTask);
router.get('/', auth, taskController.getAllTask);
router.get('/:id', auth, taskController.getTaskById);
router.put('/:id', auth, taskController.updateTask);
router.delete('/:id', auth, taskController.deleteTask);
router.get("/stats/", auth, taskController.getTotalNumberTasks);
router.get("/stats/completed", auth, taskController.getTaskCompletedNumber);
router.get("/stats/notEnd", auth, taskController.getTaskNotendNumber);


module.exports = router;