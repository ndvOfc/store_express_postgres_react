const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
});

const Favorite = sequelize.define('favorite', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const FavoriteItem = sequelize.define('favorite_item', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Item = sequelize.define('item', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  value: { type: DataTypes.INTEGER, allowNull: false },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
  image: { type: DataTypes.STRING, allowNull: false },
});

const Card = sequelize.define('card', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.INTEGER, allowNull: false },
});

const Tag = sequelize.define('tag', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.INTEGER, allowNull: false },
});

const Rating = sequelize.define('rating', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
});

const ItemInfo = sequelize.define('item_info', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

const CardTag = sequelize.define('card_tag', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasOne(Favorite);
Favorite.belongsTo(User);

User.hasMany((Rating));
Rating.belongsTo((User));

Favorite.hasMany(FavoriteItem);
FavoriteItem.belongsTo(Favorite);

Card.hasMany(Item);
Item.belongsTo(Card);

Item.hasMany(Rating);
Rating.belongsTo(Item);

Item.hasMany(FavoriteItem);
FavoriteItem.belongsTo(Item);

Item.hasMany(ItemInfo);
ItemInfo.belongsTo(Item);

Card.belongsToMany(Tag, { through: CardTag });
Tag.belongsToMany(Card, { through: CardTag });

module.exports = {
  User, Favorite, FavoriteItem, Item, Card, Tag, Rating, CardTag, ItemInfo,
};
