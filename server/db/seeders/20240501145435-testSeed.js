const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      email: 'admin@admin',
      hashpass: bcrypt.hashSync('admin', 10),
      name: 'admin',
      role: 'Admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      email: 'guest@guest',
      hashpass: bcrypt.hashSync('guest', 10),
      name: 'guest',
      role: 'Guest',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      email: 'ololo@ololo',
      hashpass: bcrypt.hashSync('ololo', 10),
      name: 'ololo',
      role: 'Guest',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Teas', [{
      sort: 'Чай Черный',
      name: 'Иван Чай',
      description: 'Чай, ИНДИЙСКИЙ ЧАЙ, ИОНОВ ЧАЙ, ВАЙ ВАЙ ВАЙ ВАЙ',
      country: 'Россия',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Chamaenerion_angustifolium-Tatry.jpg/1280px-Chamaenerion_angustifolium-Tatry.jpg',
      location: '59.245, 55.2543',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      sort: 'Чай Зеленый',
      name: 'Грин Филд МЕЛИССА',
      description: 'ЛЮБИМЫЙ ЧАЙ ОТ БЕЛЕКА',
      country: 'Неизвестно',
      img: 'https://imgproxy.sbermarket.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzE1NzI5OTkvb3JpZ2luYWwvMS8yMDIzLTExLTMwVDE4JTNBNTUlM0EzNC40MDgwNjAlMkIwMCUzQTAwLzE1NzI5OTlfMS5qcGc=.jpg',
      location: '42.562, 45.4267',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      sort: 'Улун',
      name: 'Дахунпао',
      description: 'утёсный китайский чай, который производят на северо-западе провинции Фуцзянь, в горах Уи.',
      country: 'Китай',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Tieguanyin2.jpg/1024px-Tieguanyin2.jpg',
      location: '31.55, 109.531',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      sort: 'Фиточай',
      name: 'Ройбос',
      description: 'напиток (фиточай), получаемый путём заваривания высушенных измельчённых листьев и побегов аспалатуса линейного (Aspalathus linearis), кустарника из семейства Бобовые (Fabaceae).',
      country: 'Южно-Африканская Республика',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Rooibos_geschnitten.jpg/1280px-Rooibos_geschnitten.jpg',
      location: '-32.533, 18.25',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      sort: 'Белый Чай',
      name: 'Баймудань',
      description: ' Императоры ценили такой чай за изысканность вкуса, утонченность аромата, за то, что он проясняет ум и снижает внутренний жар, который, по теории китайской медицины, является «причиной ста болезней».',
      country: 'Китай',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/%D0%91%D0%B0%D0%B9%D1%85%D0%B0%D0%BE_%D0%98%D0%BD%D1%8C%D1%87%D0%B6%D1%8D%D0%BD%D1%8C.jpg/800px-%D0%91%D0%B0%D0%B9%D1%85%D0%B0%D0%BE_%D0%98%D0%BD%D1%8C%D1%87%D0%B6%D1%8D%D0%BD%D1%8C.jpg',
      location: '27.73, 119.81',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});

    await queryInterface.bulkInsert('Comments', [{
      text: 'ТУТ СУПЕР ДУШНЫЙ КОммент  ОТ ГОСТЯ о Иван чае',
      user_id: 2,
      tea_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'ЭТОТ МОЩНЫЙ КОММЕНТ ОТ АДМИНА о Иван чае',
      user_id: 1,
      tea_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      text: 'ТУТ коммент для чая Гринфилд  ОТ ГОСТЯ',
      user_id: 2,
      tea_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'ТУТ коммент от  ГОСТЬ id:3 name:ololo о Гринфилд ',
      user_id: 3,
      tea_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'ТУТ коммент от  ГОСТЬ id:3 name:ololo о Дахун пау',
      user_id: 3,
      tea_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'ТУТ коммент от  ГОСТЬ id:3 name:ololo о Ройбос',
      user_id: 3,
      tea_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'ТУТ коммент от  ГОСТЬ id:3 name:ololo о Мудани',
      user_id: 3,
      tea_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
