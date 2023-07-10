

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');


class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    product_name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      },
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'product',
  }
);

module.exports = Product;