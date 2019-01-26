/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_dazhongfood', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shopUrl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shopName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shopId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true
    },
    shopPower: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mainRegionName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mainCategoryName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tasteScore: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    environmentScore: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    serviceScore: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    avgPrice: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shopAddress: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    defaultPic: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    tableName: 't_dazhongfood'
  });
};
