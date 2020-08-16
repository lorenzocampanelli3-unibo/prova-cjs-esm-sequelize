/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Posts.init(sequelize, DataTypes);
}

class Posts extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    postId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    author: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'Users',
        },
        key: 'userId'
      }
    }
  }, {
    sequelize,
    tableName: 'Posts',
    schema: 'dbo',
    freezeTableName: true,
    timestamps: false
  });
  return Posts;
  }
}
