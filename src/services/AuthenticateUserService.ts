import { getCustomRepository } from "typeorm"
import UsersRepositories from "../repositories/UsersRepository"
import {compare} from 'bcryptjs'
import {sign} from 'jsonwebtoken'

interface IAutenticateRequest {
    email: string
    password: string
}


class AuthenticateUserService {
    async execute({email, password}:IAutenticateRequest){
        const userRepository = getCustomRepository(UsersRepositories)

        const users = await userRepository.findOne({
            email
        })

        if(!users){
            throw new Error("Email/Password incorret")
        }

       const passwordMatch =  compare(password, users.password);
       if(!passwordMatch) {
           throw new Error("Password/Email incorret")
       }

       //Gerar token
       const token = sign({
           email: users.email
       }, "fdc1b6467021b8939a2e12118c9bfd2b", {
           subject: users.id,
           expiresIn: "1d"
       });

       return token
    
    }
}

export default AuthenticateUserService