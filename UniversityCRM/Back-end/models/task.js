const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    type: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    belongsTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;