const Sequelize = require("sequelize");
const sequelize = new Sequelize("testeNodejs", "root", "Cola132305", {
  host: "localhost",
  dialect: "mysql"
});

sequelize
  .authenticate()
  .then(function () {
    console.log("conectado com sucesso");
  })
  .catch(function (erro) {
    console.log("falha ao se conectar: " + erro);
  });