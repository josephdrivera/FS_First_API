const axios = require('axios');
require('dotenv').config();

const toDoService = async () => {
    console.log('To Do Service is working');
    return await axios.get(`${process.env.TODO_SERVICE_URL}`);
};

const toDoServiceById = async (id) => {
    console.log('To Do Service By Id is working');
    return await axios.get(`${process.env.TODO_SERVICE_URL}/${id}`);
};


module.exports = { toDoService, toDoServiceById };
