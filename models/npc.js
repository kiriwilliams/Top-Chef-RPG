module.exports = function(sequelize, DataTypes) {
    var Npc = sequelize.define("Npc", {
        chef_name: DataTypes.STRING,
        score_threshold: DataTypes.INTEGER,
        npc_img: DataTypes.STRING
      },{
        timestamps: false
      }
      );
    //associating NPCs with environments
    Npc.associate = function(models) {
        Npc.belongsTo(models.Environment, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return Npc;
};