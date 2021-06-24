import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";


class CreateUserController {
    async create(request: Request, response: Response) {

        try {
            const { name, email, admin, password } = request.body
            const createUserService = new CreateUserService();
            const user = await createUserService.execute({
                email,
                name,
                admin,
                password
            })
            return response.status(200).json(user);

        } catch (err) {
            return response.status(400).json({ error: err.message });
        }


    }
}

export default CreateUserController;