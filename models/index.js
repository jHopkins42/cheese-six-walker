// import models
const Product = require('./Product');
const Category = require('./Category');

const { HasMany } = require('sequelize');

// Products belongsTo Category
Product.hasOne(Category, {
  
  onDelete: 'CASCADE',
});
// Categories have many Products
Category:HasMany(Product, {
  //cat on the keyboard
onDelete: 'CASCADE',
foreign_key: 'category_id'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  onDelete: 'CASCADE',
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  onDelete: 'CASCADE',
});
//cat asleep on the keyboard

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
>