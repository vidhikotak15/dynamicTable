const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const tableRoutes = require('./routes/tableRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tables', tableRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('MongoDB connected');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
