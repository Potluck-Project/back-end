const bcrypt = require("bcryptjs");

exports.seed = function (knex) {
  return knex("users").insert([
    {
      user_id: 1,
      username: "Adam",
      email: "humbleadam@gmail.com",
      password: "$2a$08$Q5VFvCDMijXd0QdP41dATOmeKo/GIzuOdPKqosJGCblOdRGsV.QkK"
    },
   
    
    {
      user_id: 2,
      username: "Ryan",
      email: "dillpickle23@gmail.com",
      password: "$2a$08$Q5VFvCDMijXd0QdP41dATOmeKo/GIzuOdPKqosJGCblOdRGsV.QkK"
    },

    {
      user_id: 3,
      username: "Kazden",
      email: "kazden@gmail.com",
      password: "$2a$08$Q5VFvCDMijXd0QdP41dATOmeKo/GIzuOdPKqosJGCblOdRGsV.QkK"
    },

    {
      user_id: 4,
      username: "Marius",
      email: "marius@gmail.com",
      password: "$2a$08$Q5VFvCDMijXd0QdP41dATOmeKo/GIzuOdPKqosJGCblOdRGsV.QkK"
    },
  ]);
};
