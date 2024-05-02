const e = require('express');
const {Tea} = require('../db/models/');

const APRouter = require('express').Router();


APRouter.get('/', async (req, res) => {
    try {
        const teas = await Tea.findAll();
        res.json(teas);
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
});

APRouter.post('/', async (req, res) => {
    try {
        const { sort, name, description, country, img, location } = req.body
        const tea = await Tea.create({sort, name, description, country, img, location});
        res.json(tea);
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
});

APRouter.delete('/:id', async (req, res) => {
    try {
        await Tea.destroy({ where: { id: req.params.id } });
       return res.sendStatus(200);
        
  } catch (error) {
    console.log(error)
    res.status(500).json({message: 'Server Error'});
  }
});

module.exports = APRouter;