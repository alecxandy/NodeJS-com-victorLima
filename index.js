var express = require("express"); //importando a biblioteca express
const app = express(); //variavel de aplicação onde recebe as funcionalidades do express

//aqui fica uma rota
app.get("/", function (req, res) {
  res.send("Hello word");
});

//aqui fica uma rota
app.get("/sobre",function(req,res){
res.send("Bem vindo a meu app")
})

//configiração de execução 
app.listen(8081, function () {
  console.log("servido rodando na url: http://localhost:8081");
});
