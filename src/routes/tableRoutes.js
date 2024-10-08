// backend/routes/tableRoutes.js
const express = require('express');
const {
    getAllTableData,
    createTableData,
} = require('../controller/tableController');

const router = express.Router();

// Get all data
router.get('/', getAllTableData);

// Post data
router.post('/', createTableData);

module.exports = router;
