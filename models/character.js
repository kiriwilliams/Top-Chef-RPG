module.exports = function(sequelize, DataTypes){
    var Character = sequelize.define("characters", {
        name: DataTypes.STRING,
        skill_F: DataTypes.STRING,
        skill_J: DataTypes.STRING,
        skill_T: DataTypes.STRING,
        skill_C: DataTypes.STRING,
        skill_I: DataTypes.STRING,
    });
    Character.associate = function(models) {
        Character.belongsTo(models.environments, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return Character;
}
