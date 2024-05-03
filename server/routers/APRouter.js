const fs = require('fs/promises');
const sharp = require('sharp');
const APRouter = require('express').Router();
const { where } = require('sequelize');
const upload = require('../middlewares/multer');
const { Tea } = require('../db/models');

APRouter.get('/', async (req, res) => {
  try {
    const teas = await Tea.findAll();
    res.json(teas);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

APRouter.post('/', upload.single('file'), async (req, res) => {
  try {
    const {
      sort, name, description, country, img, location,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'File not found' });
    }

    const nameImg = `${Date.now()}.webp`;
    const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();

    await fs.writeFile(`./public/img/${nameImg}`, outputBuffer);

    const tea = await Tea.create({
      sort, name, description, country, img: nameImg, location,
    });
    res.json(tea);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

APRouter.delete('/:id', async (req, res) => {
  try {
    const tea = await Tea.findOne({ where: { id: req.params.id } });
    fs.unlink(`./public/img/${tea.img}`).catch((e) => console.log(e));
    await Tea.destroy({ where: { id: req.params.id } });
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

APRouter.get('/select', async (req, res) => {
  try {
    const { country } = req.query;

    const decodedCountry = decodeURI(country);

    const searchCard = await Tea.findAll({
      where: {
        country: decodedCountry,
      },
    });
    console.log(searchCard);
    res.json(searchCard);
  } catch (error) {
    console.error('Не удалось найти карточку', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = APRouter;
