const Sequelize = require("sequelize");
const sequelize = new Sequelize("testeNodejs", "root", "Cola132305", {
  host: "localhost",
  dialect: "mysql"
});

//teste de conecxao com o mysql
sequelize
  .authenticate()
  .then(function () {
    console.log("conectado com sucesso");
  })
  .catch(function (erro) {
    console.log("falha ao se conectar: " + erro);
  });

//model postagem
const Postagem = sequelize.define("postagens", {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
});

Postagem.sync({
  force: true
});
