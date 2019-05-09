module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("users", {
        username: DataTypes.STRING,
        password: DataTypes.STRING
    });
    return User;
};