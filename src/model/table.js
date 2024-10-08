const mongoose = require('mongoose');

const tableDataSchema = new mongoose.Schema({
    columns: { type: Array, required: true },
    rows: { type: Array, required: true },
});

module.exports = mongoose.model('TableData', tableDataSchema);
