import { NextFunction, Request, Response } from "express";

export function ensureAdmin(request:Request, response:Response, next:NextFunction){
    // Verificar se usuário admin
    const admin = true;

    if(admin){
        return next();
    }

    if(!admin){
        return response.status(401).json({Error: "Unauthorized "})
    }
}