const express = require('express');
const { Tea, User } = require('../../server/db/models');
const { Comment } = require('../../server/db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const teaRouter = express.Router();

teaRouter.route('/:id').get( async (req, res) => {
    const {id} = req.params;
    try {
        const tea = await Tea.findByPk(id, { include: {model: Comment, include: { model: User}} });
        console.log({tea})
        if (tea) {
            res.json(tea);
        } else {
            res.status(404).json({ message: 'Tea not found' });
        }
    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ message: 'Server Error' });
    }

})

teaRouter.post('/', async (req, res) => {
    try {
        const { text } = req.body
        const tea = await Tea.create({text});
        res.json(tea);
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
});

teaRouter.post('/:id/comments', /*verifyAccessToken,*/ async (req, res) => {
    const {id} = req.params
    const newcom = await Comment.create({...req.body, tea_id: id, user_id: 1 /*user_id: res.locals.user.id*/})
    res.json(newcom)
})

module.exports = teaRouter;
