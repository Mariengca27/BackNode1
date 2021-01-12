const express = require('express');
const app  = express();


app.get ('/', function (request, response) {

   response.send("Rota número 1.")

});
app.listen(8080), ()=>{

       console.log("Sevidor iniciado na porta 8080 localhost:8080" );
}; 