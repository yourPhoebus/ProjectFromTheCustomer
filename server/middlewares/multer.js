const multer = require('multer');

const upload = multer({
  storage: multer.memoryStorage(), // так multer будет хранить файл в req.file в формате Buffer
  limits: { fileSize: 10 * 1024 * 1024 }, // ограничение на размер файла в байтах
  fileFilter: (req, file, cb) => {
    if (file.mimetype.includes('image')) {
      cb(null, true);
    } else {
      cb(new Error('Неподдерживаемый тип файла'), false);
    }
  },
});
module.exports = upload;
