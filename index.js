const express = require('express');
const res = require('express/lib/response');
const app = express();

app.get('/',(req,res)=>res.send("Mi servidor en blanco en un dropplet que funciona Mediasoup")
);

app.listen(3004);
console.log("Server on port ", 3004)