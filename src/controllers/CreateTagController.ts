import { Request, Response } from "express";
import CreateTagService from "../services/CreateTagService";

class CreateTagController {


    async create(request:Request,response:Response){
        try {
            const createdTagService = new CreateTagService();
            const {name} = request.body
            const createdTag = await createdTagService.execute(name);
            return response.status(200).json(createdTag)
        } catch (err) {
            return response.status(400).json({message: err.message})
            
        }
    }

   
}

export default CreateTagController