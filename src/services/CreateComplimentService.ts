import { getCustomRepository } from "typeorm"
import ComplimentsRepositories from "../repositories/ComplimentsRepositories"
import UsersRepositories from "../repositories/UsersRepository"

interface IComplimentRequest{
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string
}

class CreateComplimentService{
    async execute({tag_id,user_receiver,user_sender,message}:IComplimentRequest){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepositories = getCustomRepository(UsersRepositories);
        
        if(user_sender === user_receiver){
            throw new Error("Não pode enviar um elogio pra você mesmo")
        }
    
        const userReceiverExists = await usersRepositories.findOne(user_receiver) //aqui ta o valor do id do usuário

        if(!userReceiverExists){
            throw new Error("Usuário de destino não existe ou não é valido");
        }

        const compliment = complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        await complimentsRepositories.save(compliment)
        return compliment


    }

}

export default CreateComplimentService