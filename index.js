var express = require("express"); //importando a biblioteca express
const app = express(); //variavel de aplicação onde recebe as funcionalidades do express

//aqui fica uma rota
app.get("/", function (req, res) {
  res.send("Hello word");//função send só bode ser enviado uma vez
});

//aqui fica uma rota
app.get("/sobre", function (req, res) {
  res.send("Bem vindo a meu app");
});

app.get("/ola/:nome", function (req, res) {
  res.send("ola " + req.params.nome);
});

//configiração de execução
app.listen(8081, function () {
  console.log("servido rodando na url: http://localhost:8081");
});
