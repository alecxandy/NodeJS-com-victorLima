var express = require("express"); //importando a biblioteca express

const app = express(); //variavel de aplicação onde recebe as funcionalidades do express

app.listen(8081,function(){
    console.log("servirdo rodando na url: http://localhost:8081")
});


//função de callback: Executada quando acontece um evento