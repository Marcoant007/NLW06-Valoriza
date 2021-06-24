import { Request, Response } from "express";
import CreateComplimentService from "../services/CreateComplimentService";

class CreateComplimentController {

    async create(request: Request, response: Response) {
        try {
            const { tag_id, user_receiver, user_sender, message } = request.body

            const createComplimentService = new CreateComplimentService();

            const compliment = await createComplimentService.execute({
                tag_id, user_receiver, user_sender, message
            })
            return response.status(200).json(compliment)

        } catch (error) {
            return response.status(400).json({error: error.message})

        }

    }
}

export default CreateComplimentController