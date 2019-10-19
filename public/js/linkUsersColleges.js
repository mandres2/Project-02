colleges.belongsToMany(users, {through: 'userscolleges'});
users.belongsToMany(colleges, {through: 'userscolleges'});