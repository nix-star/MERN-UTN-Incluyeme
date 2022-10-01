const mongoose = require('mongoose');

const tareaSchema = mongoose.Schema({
    tarea: String
}, {
    versionKey: false
});

const Tarea = mongoose.model('tarea', tareaSchema);

module.exports = { Tarea };