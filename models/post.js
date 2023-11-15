// Post.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./user');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    parent_post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'posts',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableElement: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;

// Define the association with the User model
Post.belongsTo(User, {
  foreignKey: 'user_id',
});
