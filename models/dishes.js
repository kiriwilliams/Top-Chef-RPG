module.exports = function(sequelize, DataTypes) {
    var Dishes = sequelize.define("Dishes", {
        name: DataTypes.STRING,
        mod_F: DataTypes.FLOAT,      
        mod_J: DataTypes.FLOAT,      
        mod_T: DataTypes.FLOAT,      
        mod_C: DataTypes.FLOAT,      
        mod_I: DataTypes.FLOAT,      
    },{
      timestamps: false
    }
    );
    Dishes.associate = function(models) {
        Dishes.belongsTo(models.Environment, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return Dishes;
};