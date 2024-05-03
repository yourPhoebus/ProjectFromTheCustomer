const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Comment, User }) {
      // define association here
      this.hasMany(Comment, { foreignKey: 'tea_id' });
      this.belongsToMany(User, { through: 'Comment', foreignKey: 'tea_id' });
    }
  }
  Tea.init({
    sort: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    country: DataTypes.STRING,
    img: DataTypes.TEXT,
    location: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Tea',
  });
  return Tea;
};
