const bcrypt = require("bcryptjs");

exports.seed = function (knex) {
  return knex("users").insert([
    {
      user_id: 1,
      username: "Adam",
      email: "humbleadam@gmail.com",
      password: bcrypt.hashSync("password", 8)
    },

    {
      user_id: 2,
      username: "Ryan",
      email: "dillpickle23@gmail.com",
      password: bcrypt.hashSync("password", 8)
    },

    {
      user_id: 3,
      username: "Kazden",
      email: "kazden@gmail.com",
      password: bcrypt.hashSync("password", 8)
    },

    {
      user_id: 4,
      username: "Marius",
      email: "marius@gmail.com",
      password: bcrypt.hashSync("password", 8)
    },
  ]);
};
