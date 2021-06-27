import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import UsersRepositories from "../repositories/UsersRepository";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {

    const { user_id } = request //pois o user id agora é propriedade do request
    console.log(user_id)

    const usersRepositories = getCustomRepository(UsersRepositories);
    const { admin } = await usersRepositories.findOne(user_id)
    if (admin) {
        return next();
    }

    if (!admin) {
        return response.status(401).json({ Error: "Unauthorized " })
    }
}