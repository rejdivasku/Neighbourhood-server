module.exports = (sequelize, DataTypes) => {
     const Admns = sequelize.define("Admns", {
          id: {
               type: DataTypes.INTEGER,
               defaultValue: DataTypes.INTEGER,
               primaryKey: true,
          },
          imgUrl: {
               type: DataTypes.STRING,
               allowNull: false,
          },
          description: {
               type: DataTypes.STRING,
               allowNull: false,
          },
          username: {
               type: DataTypes.STRING,
               allowNull: false,
          },
          title: {
               type: DataTypes.STRING,
               allowNull: false,
          },
     });

     return Admns;
};