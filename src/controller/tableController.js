// backend/controllers/tableController.js
const TableData = require('../model/table');

// Get all data
const getAllTableData = async (req, res) => {
    try {
        const tableData = await TableData.find();
        res.json(tableData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Post data
const createTableData = async (req, res) => {
    const { columns, rows } = req.body;
    const newTableData = new TableData({
        columns,
        rows,
    });

    try {
        const savedData = await newTableData.save();
        res.status(201).json(savedData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllTableData,
    createTableData,
};
