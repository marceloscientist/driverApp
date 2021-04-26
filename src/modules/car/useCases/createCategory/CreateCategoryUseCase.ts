import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private iCategoryRepository: ICategoryRepository) { }

    execute({name, description}:IRequest):void {
        const category = this.iCategoryRepository.findByName(name)
        if(category) {
            throw new Error("Category Already Exist");
        }
        this.iCategoryRepository.create({name, description});
    }
}

export { CreateCategoryUseCase }