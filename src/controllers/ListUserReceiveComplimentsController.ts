import { Request, Response } from "express";
import ListUserReceiveComplimentsService from "../services/ListUserReceiveComplimentsService";
import ListUserSendComplimentsService from "../services/ListUserSendComplimentsService";

class ListUserReceivedComplimentsController {

    async list(request:Request, response:Response){
        const {user_id} = request;
        const listUserSendService = new ListUserReceiveComplimentsService()
        const compliments = await listUserSendService.execute(user_id)
        return response.json(compliments)
    }
}
export default ListUserReceivedComplimentsController