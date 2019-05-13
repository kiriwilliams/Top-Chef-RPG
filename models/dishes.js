module.exports = function(sequelize, DataTypes) {
  var Dishes = sequelize.define("Dishes", {
    name: DataTypes.STRING,
    skill: DataTypes.STRING,
    mod_R: DataTypes.FLOAT,      
    mod_K: DataTypes.FLOAT,      
    mod_G: DataTypes.FLOAT,      
    mod_S: DataTypes.FLOAT,      
    mod_D: DataTypes.FLOAT, 
    selected: DataTypes.BOOLEAN,     
  }, {
    timestamps: false
  });
  
  Dishes.associate = function(models) {
    Dishes.belongsTo(models.Environment, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Dishes;
};