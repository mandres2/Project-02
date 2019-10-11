module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define("Book", {
    googleId: DataTypes.INTEGER
  });

  Book.associate = (models) => {
    Book.belongsToMany(models.User, {
      through: 'Favorites'
    }); 
  };

  return Book;
};
