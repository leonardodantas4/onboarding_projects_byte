import bodyParser from "body-parser";
import express from "express";
const cors = require('cors');

// Criando aplicação express
const app = express();

// Utilizando o bodyparser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Utilizando o cors
app.use(cors());

app.listen(3000, () => console.log("Server is running in port 3000!"));