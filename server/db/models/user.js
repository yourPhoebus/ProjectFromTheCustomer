const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Comment, Tea }) {
      // define association here
      this.hasMany(Comment, { foreignKey: 'user_id' });
      this.belongsToMany(Tea, { through: 'Comment', foreignKey: 'user_id' });
    }
  }
  User.init({
    email: DataTypes.STRING,
    hashpass: DataTypes.TEXT,
    name: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
