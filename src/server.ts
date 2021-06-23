import express, {Request, Response, NextFunction} from 'express';
import "reflect-metadata";
import "./database";
import router from './routes';
import "express-async-errors"

const app = express();
var port = 3000;
app.use(express.json());
app.use(router);
app.use((err:Error,request:Request,response:Response, next:NextFunction) => {
    if(err instanceof Error){
      //verifico a instancia do error
      return response.status(400).json({
          error: err.message
      })  
    }

    return response.status(500).json({
        status: "Error",
        message: "Internal Server Error"
    })
})

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))