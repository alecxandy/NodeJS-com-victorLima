//conecxao com banco
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

//executando o comando de criação da tabela
Postagem.sync({
  force: true
});

//model Usuarios
const Usuarios = sequelize.define("usuarios", {
  nome: {
    type: Sequelize.STRING
  },
  sobrenome: {
    type: Sequelize.TEXT
  },
  idade: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  }
});

//executando o comando de criação da tabela
Usuarios.sync({
  force: true
});

Usuarios.create