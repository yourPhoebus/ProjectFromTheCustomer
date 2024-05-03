const express = require('express');
const { Tea } = require('../db/models');

const MainPageRouter = express.Router();

MainPageRouter.get('/', async (req, res) => {
    try {
        const data = await Tea.findAll();
        console.log(data);
        res.json(data);
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
});
module.exports = MainPageRouter;
