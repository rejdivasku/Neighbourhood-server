const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
     const Post = sequelize.define("Post", {
          id: {
               type: Sequelize.UUID,
               defaultValue: Sequelize.UUIDV4,
               primaryKey: true,
          },
          title: {
               type: DataTypes.STRING,
               allowNull: false,
          },
          admnsUnit: {
               type: DataTypes.INTEGER,
               allowNull: false,
          },
          description: {
               type: DataTypes.STRING,
               allowNull: false,
          },
          createdBy: {
               type: DataTypes.STRING,
          },
          updatedBy: {
               type: DataTypes.STRING,
          },
          createdById: {
               type: DataTypes.STRING,
          },
          updatedById: {
               type: DataTypes.STRING,
          },
     });

     Post.associate = (models) => {
          Post.belongsTo(models.Category)
     };
     
     return Post;
};