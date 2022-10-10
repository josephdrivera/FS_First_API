const express = require('express');
const todosRouter = express.Router();
const { todosService, toDoServiceById } = require('../services/toDoService');


todosRouter.get('/', (req, res) => {
    todosService().then(result => {
        res.status(200).json(result.data);
    }
    ).catch((error) => {
        res.status(500).json({ error });
        error: {
            message: error.message
        }
    });
});


todosRouter.get('/:id', (req, res, next) => {
    toDoServiceById(req.params.id).then(result => {
        res.status(200).json(result.data);
    }).catch((error) => {
        res.status(500).json({ error });
        error: {
            message: error.message
        }
    });
});



module.exports = todosRouter;