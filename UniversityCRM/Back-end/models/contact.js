const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    priority: {
        type: Number,
        enum : [1, 2, 3, 4, 5]
    },
    name: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: ""
    },
    company: {
        type: String,
        default: ""
    },
    address: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    email_address: {
        type: String,
        default: ""
    }
}, {timestamps: true});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;