import { getCustomRepository } from "typeorm";
import UsersRepositories from "../repositories/UsersRepository";
import {hash} from "bcryptjs"
interface IUsers {
    name: string;
    email: string;
    admin?: boolean;
    password: string
}
class CreateUserService {
    async execute({email,name,admin,password}:IUsers){
        
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
        const passwordHash = await hash(password, 8)

        const user = userRepository.create({
            name,
            email,
            admin,
            password : passwordHash
        })
        await userRepository.save(user)
        return user
    }
}

export default CreateUserService;