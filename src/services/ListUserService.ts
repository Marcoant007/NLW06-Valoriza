import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm"
import UsersRepositories from "../repositories/UsersRepository"

class ListUserService {

    async execute(){
        const usersRepositories = getCustomRepository(UsersRepositories);
        const users = await usersRepositories.find();
        return classToPlain(users)
    };
};
export default ListUserService