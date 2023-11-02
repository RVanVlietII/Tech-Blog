const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: false
        },
        post_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id'
            }
        }

    },
    {
        sequelize,
        freezeTableElement: true,
        underscored: true,
        modelName: 'post'
    }
)

module.exports = Post;