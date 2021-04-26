import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

class ListSpecificationService {
    constructor(private iSpecificationRepository: ISpecificationRepository) { }
    execute() {
        return this.iSpecificationRepository.list();
    }
}

export { ListSpecificationService }