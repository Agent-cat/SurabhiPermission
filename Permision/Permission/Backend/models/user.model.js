const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    year: {
        type: Number,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    surabhiwing: {
        type: String,
        required: true,
    }
   
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;