module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: DataTypes.STRING,
        password: DataTypes.STRING
    });
    User.associate = function(models) {
        User.hasMany(models.Character, {
          onDelete: "cascade"
        });
    }
    return User;
    
};