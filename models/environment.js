module.exports = function(sequelize, DataTypes) {
    var Environment = sequelize.define("environments", {
      background: DataTypes.STRING,
      flavour_text: DataTypes.TEXT
    });
    return Environment;
  };
  