const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    type: {
        type: String,
        default: ""
    },
    priority: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        default: ""
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    schedule_date: {
        type: Date,
        required: true
    }
}, {timestamps: true});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;