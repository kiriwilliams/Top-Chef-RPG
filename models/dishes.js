module.exports = function(sequelize, DataTypes) {
    var Dishes = sequelize.define("dishes", {
        name: DataTypes.STRING,
        mod_F: DataTypes.INTEGER,      
        mod_J: DataTypes.INTEGER,      
        mod_T: DataTypes.INTEGER,      
        mod_C: DataTypes.INTEGER,      
        mod_I: DataTypes.INTEGER,      
    });
    Dishes.associate = function(models) {
        Dishes.belongsTo(models.environments, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return Dishes;
};