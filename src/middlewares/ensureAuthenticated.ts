import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"


interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    // Receber token
    const authToken = request.headers.authorization

    // Validar se token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }
    //ignora  a primeira posição e pega a segunda
    const [, token] = authToken.split(" ")

    try {
        // Validar se token é valido 
        const {sub} = verify(token, "fdc1b6467021b8939a2e12118c9bfd2b") as IPayload;
        request.user_id = sub
        
        return next();
    } catch (error) {
        return response.status(401).send({message: error.message})
    }

    // Recuperar informações do usuário 
}