import { getCustomRepository } from "typeorm"
import ComplimentsRepositories from "../repositories/ComplimentsRepositories";
class ListUserReceiveComplimentsService {
    async execute(user_id){
        const complimentsRepository = getCustomRepository(ComplimentsRepositories);
        const compliments = await complimentsRepository.find({
            where: {
                user_receiver: user_id
            },
            relations: ["userSender", "userReceiver", "tag"]
        });
        return compliments
    }
}
export default ListUserReceiveComplimentsService