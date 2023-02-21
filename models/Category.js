const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
     const Category = sequelize.define("Category", {
          id: {
               type: Sequelize.UUID,
               defaultValue: Sequelize.UUIDV4,
               primaryKey: true,
          },
          name: {
               type: DataTypes.STRING,
               allowNull: false,
          }
     });

     Category.associate = (models) => {
          Category.hasMany(models.Post, {
               onDelete: "cascade",
          })
     };

     return Category;
};