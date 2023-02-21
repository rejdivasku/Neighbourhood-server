
const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
     const Users = sequelize.define("Users", {
          id: {
               type: Sequelize.UUID,
               defaultValue: Sequelize.UUIDV4,
               primaryKey: true,
          },
          username: {
               type: DataTypes.STRING,
               allowNull: false,
          },
          firstName: {
               type: DataTypes.STRING,
               allowNull: false,
          },
          lastName: {
               type: DataTypes.STRING,
               allowNull: false,
          },
          email: {
               type: DataTypes.STRING,
               allowNull: false,
          },
          password: {
               type: DataTypes.STRING,
               allowNull: false,
          },
     });

     // Users.associate = (models) => {
     //   Users.hasMany(models.Post, {
     //     onDelete: "cascade",
     //   });
     // };
     return Users;
};