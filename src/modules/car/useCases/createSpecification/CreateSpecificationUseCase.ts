import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private iSpecificationRepository: ISpecificationRepository) { }

    execute({name, description}:IRequest):void {
        const specification = this.iSpecificationRepository.findByName(name)
        if(specification) {
            throw new Error("Specification Already Exist");
        }
        this.iSpecificationRepository.create({name, description});
    }
}

export { CreateSpecificationUseCase }