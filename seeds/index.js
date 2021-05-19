const sequelize = require("../config/connection");
const seedUsers = require("./usersData");
const seedBlog = require("./blogData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedBlog();

  process.exit(0);
};

seedAll();
