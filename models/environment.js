module.exports = function(sequelize, DataTypes) {
    var Environment = sequelize.define("Environment", {
      background: DataTypes.STRING,
      flavour_text: DataTypes.TEXT
    });
    Environment.associate = function(models) {
      Environment.hasMany(models.Npc, {
        onDelete: "cascade"
      });
      Environment.hasMany(models.Dishes, {
        onDelete: "cascade"
      });
    };  
    return Environment;
  };

  