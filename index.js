const express = require('express');
const res = require('express/lib/response');
const app = express();

app.get('/',(req,res)=>res.send("Hola mundo modificado por wilson")
);

app.listen(3004);
console.log("Server on port ", 3004)