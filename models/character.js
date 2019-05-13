module.exports = function(sequelize, DataTypes){
  var Character = sequelize.define("Character", {
    name: DataTypes.STRING,
    skill_R: DataTypes.INTEGER,
    skill_K: DataTypes.INTEGER,
    skill_G: DataTypes.INTEGER,
    skill_S: DataTypes.INTEGER,
    skill_D: DataTypes.INTEGER,
  }, {
    timestamps: false
  });

  Character.associate = function(models) {
    Character.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Character;
}
