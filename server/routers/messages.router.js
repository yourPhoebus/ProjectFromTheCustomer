const express = require('express');
const { Message, User } = require('../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const messagesRouter = express.Router();

messagesRouter.route('/').get(async (req, res) => {
  const messages = await Message.findAll({
    include: [User],
  });
  res.json(messages);
}).post(verifyAccessToken, async (req, res) => {
  const newMessage = await Message.create({ ...req.body, userId: res.locals.user.id });
  const msgWithUser = await Message.findByPk(newMessage.id, { include: [User] });
  res.json(msgWithUser);
});

messagesRouter.get('/my', verifyAccessToken, async (req, res) => {
  const myMessages = await Message.findAll({
    where: { userId: res.locals.user.id },
    include: User,
  });
  res.json(myMessages);
});

messagesRouter.route('/:id')
  .get(async (req, res) => {
    const message = await Message.findByPk(req.params.id, {
      include: [User],
    });
    res.json(message);
  })
  .delete(async (req, res) => {
    await Message.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  })
  .patch(async (req, res) => {
    const message = await Message.findByPk(req.params.id);
    await message.update(req.body);
    res.json(message);
  });

module.exports = messagesRouter;
