const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email_address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        default: ""
    },
    company: {
        type: String,
        default: ""
    },
    mode: {
        type: String,
        default: "light"
    },
    address: {
        type: String,
        default: ""
    },
    sortMode: {
        type: String,
        default: "priority"
    }

});

userSchema.methods.isValidPassword = async function (password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    return compare;
}

const User = mongoose.model('User', userSchema);
module.exports = User;