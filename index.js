var express = require("express"); //importando a biblioteca express
const app = express(); //variavel de aplicação onde recebe as funcionalidades do express



//configiração de execução
app.listen(8081, function () {
  console.log("servido rodando na url: http://localhost:8081");
});
