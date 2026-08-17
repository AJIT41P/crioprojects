const Task = require('../models/task.model');

const createTask = async (taskData, file) => {
  if (file) {
    taskData.linkedFile = {
      data: file.buffer,
      contentType: file.mimetype,
      originalName: file.originalname,
    };
  }
  const task = new Task(taskData);
  return await task.save();
};

const getAllTasks = async () => {
  return await Task.find().select('-linkedFile.data');
};

const getTaskById = async (id) => {
  return await Task.findById(id);
};

const updateTask = async (id, updateData, file) => {
  if (file) {
    updateData.linkedFile = {
      data: file.buffer,
      contentType: file.mimetype,
      originalName: file.originalname,
    };
  }
  return await Task.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
};

const deleteTask = async (id) => {
  return await Task.findByIdAndDelete(id);
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};