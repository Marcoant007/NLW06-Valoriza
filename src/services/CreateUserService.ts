import { getCustomRepository } from "typeorm";
import UsersRepositories from "../repositories/UsersRepository";


interface IUsers {
    name: string;
    email: string;
    admin?: boolean;
}




class CreateUserService {
    async execute({email,name,admin}:IUsers){
        const userRepository = getCustomRepository(UsersRepositories)

        if(!email){
            throw new Error ("Email incorreto")
        };

        const usersAlreadyExists = await userRepository.findOne({
            email
        });

        if(usersAlreadyExists){
            throw new Error ("User already exists ")
        };

        const user = userRepository.create({
            name,
            email,
            admin
        })
        await userRepository.save(user)
        return user
    }
}

export default CreateUserService;