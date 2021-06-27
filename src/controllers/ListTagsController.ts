import { Request, Response } from "express";
import ListTagsService from "../services/ListTagsService";

class ListTagsController {
    async list(request:Request, response:Response){
        const listTagService = new ListTagsService();
        const tags = await listTagService.execute();
        return response.status(200).json(tags);
    }
}

export default ListTagsController