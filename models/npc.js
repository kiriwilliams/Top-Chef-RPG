module.exports = function(sequelize, DataTypes) {
    var Npc = sequelize.define("npcs", {
        chef_name: DataTypes.STRING,
        score_threshold: DataTypes.STRING,
    })
    //associating NPCs with environments
    Npc.associate = function(models) {
        Npc.belongsTo(models.environments, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return Npc;
};