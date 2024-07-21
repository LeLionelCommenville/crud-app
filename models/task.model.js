const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
        id: {
            type: Number,
            required: [true, "Id is required"]
        },
        title: {
            type: String,
            required: [true, "Title is required"]
        },
        content: {
            type: String,
            required: [true, "Content is required"]
        },
        completion: {
            type: Number,
            required: [true, "Completion is required"],
            default: 0
        },
        done: {
            type: Boolean,
            required: [true, "Done is required"],
            default: false
        },
    },
    {
        timestamp: true
    }
);

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;