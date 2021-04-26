import { ICategoryRepository } from "../repositories/ICategoryRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private iCategoryRepository: ICategoryRepository) { }

    execute({name, description}:IRequest):void {
        const category = this.iCategoryRepository.findByName(name)
        if(category) {
            throw new Error("Category Already Exist");
        }
        this.iCategoryRepository.create({name, description});
    }
}

export { CreateCategoryService }