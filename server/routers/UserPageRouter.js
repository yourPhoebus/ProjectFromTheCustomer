const express = require('express');
const { Comment, User } = require('../db/models');

const userPageRouter = express.Router();

userPageRouter.get('/', async (req, res) => {
  const myComments = await Comment.findAll({ include: [User] });
  res.json(myComments);
});

userPageRouter.route('/:id')
  .get(async (req, res) => {
    const comm = await Comment.findAll({
      where: { user_id: req.params.id },
    });
    res.json(comm);
  });

module.exports = userPageRouter;
