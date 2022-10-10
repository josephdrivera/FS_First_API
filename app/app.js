const express = require('express');
const todosRouter = require('../router/toDoRouter');

const app = express();
// https;//localhost:3000
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is Running ' });
});

// routes middleware
app.use('/todos', todosRouter);

// add middleware
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
            method: req.method,
        },
    });
});








module.exports = app;