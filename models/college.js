module.exports = function (sequelize, DataTypes) {
    var college = sequelize.define("college", {
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
        // We're saying that a Post should belong to an user
        // A Post can't be created without an user due to the foreign key constraint
        college.belongsTo(models.user, {
            onDelete: "cascade"
        });
    };

    return college;
};