const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');
const upload = require('../middlewares/upload');

router.post('/', upload.single('linkedFile'), taskController.createTask);
router.get('/', taskController.getTasks);
router.get('/:id', taskController.getTaskById);
router.get('/:id/file', taskController.downloadFile);
router.put('/:id', upload.single('linkedFile'), taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;