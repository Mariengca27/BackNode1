const express = require('express');
const mongoose = require('mongoose');
const app  = express();



app.get ('/metas', async (request, response) => {

   return response.json({

      Nome: "Humberto",
      id: 340,
      fonte: "setor e"
}



);

});
app.listen(8080), ()=>{

       console.log("Sevidor iniciado na porta 8080 localhost:8080" );
};          