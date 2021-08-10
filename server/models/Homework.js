const { Schema } = require('mongoose');

const homeworkSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    class: {
        type: String, 
        required: true
    },
    dueDate: {
        type: Date,
        required: true,
        default: Date.now,
        get: (timestamp) => dateFormate(timestamp)
    },
    taskInfo: {
        type: String,
        minLength: 1,
        maxLength: 1000,
        required: true
    }
})