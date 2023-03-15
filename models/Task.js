const mongoose = require("mongoose")
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [40, 'Name cannot be more than 40 characters']
    },
    completed: {
        type: Boolean,
        default: false
    },
    // description: {
    //     type: String,
    //     required: true
    // },
    // due_date: {
    //     type: Number, 
    //     required: true
    // }, period, period type, task list id
});

module.exports = mongoose.model('Task', TaskSchema)