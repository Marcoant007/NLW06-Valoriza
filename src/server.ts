import express from 'express';
import "reflect-metadata";
import "./database";
import router from './routes';

const app = express();
var port = 3000;
app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))