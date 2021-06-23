import { getCustomRepository } from "typeorm"
import TagsRepositories from "../repositories/TagsRepositories"




class CreateTagService{

    async execute(name:string){
        const tagsRepositories = getCustomRepository(TagsRepositories);
        
        if(!name){
            throw new Error("Incorrect Name!");
        }

        const tagAlreadyExists = await tagsRepositories.findOne({
            name
        })

        if(tagAlreadyExists){
            throw new Error("Tag already exists!")
        }

        const createdTags = tagsRepositories.create({
            name
        })

        await tagsRepositories.save(createdTags)
        return createdTags

    }

}

export default CreateTagService