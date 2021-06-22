import express from 'express';
import "reflect-metadata";
import "./database";

const app = express();
var port = 3000;

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))