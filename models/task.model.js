const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['TODO', 'DONE'],
    default: 'TODO',
  },
  linkedFile: {
    data: Buffer,
    contentType: String,
    originalName: String,
  },
  createdOn: {
    type: Date,
    required: true,
    default: Date.now,
  },
  deadline: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Task', taskSchema);