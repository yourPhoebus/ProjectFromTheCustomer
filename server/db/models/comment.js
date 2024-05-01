const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Tea, User }) {
      // define association here
      this.belongsTo(Tea, { foreignKey: 'tea_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Comment.init({
    text: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    tea_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
