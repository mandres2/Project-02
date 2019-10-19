module.exports = function (sequelize, DataTypes) {
    var College = sequelize.define("Colleges", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }
    });

    college.associate = function (models) {
        College// We're saying that a Post should belong to an user
        // A Post can't be created without an user due to the foreign key constraint
        College.belongsTo(models.User, {
            onDelete: "cascade"
        });
    };

    return college;
};