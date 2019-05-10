module.exports = function(sequelize, DataTypes){
    var Character = sequelize.define("Character", {
        name: DataTypes.STRING,
        skill_F: DataTypes.INTEGER,
        skill_J: DataTypes.INTEGER,
        skill_T: DataTypes.INTEGER,
        skill_C: DataTypes.INTEGER,
        skill_I: DataTypes.INTEGER,
    },{
      timestamps: false
    }
    );
    Character.associate = function(models) {
        Character.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return Character;
}
