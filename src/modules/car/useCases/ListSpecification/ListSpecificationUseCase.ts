import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

class ListSpecificationUseCase {
    constructor(private iSpecificationRepository: ISpecificationRepository) { }
    execute() {
        return this.iSpecificationRepository.list();
    }
}

export { ListSpecificationUseCase }