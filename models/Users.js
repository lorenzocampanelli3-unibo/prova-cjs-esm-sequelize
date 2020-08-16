/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Users.init(sequelize, DataTypes);
}

class Users extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    userId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Users',
    schema: 'dbo',
    freezeTableName: true,
    timestamps: false
  });
  return Users;
  }
}
