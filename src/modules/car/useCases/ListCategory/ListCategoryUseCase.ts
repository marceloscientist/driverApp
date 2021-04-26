import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class ListCategoryUseCase {
    constructor(private iCategoryRepository: ICategoryRepository) { }
    execute() {
        return this.iCategoryRepository.list();
    }
}

export { ListCategoryUseCase }