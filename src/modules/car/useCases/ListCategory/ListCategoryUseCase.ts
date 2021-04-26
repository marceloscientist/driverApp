import { Category } from "../../model/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class ListCategoryUseCase {
    constructor(private iCategoryRepository: ICategoryRepository) { }
    execute(): Category[] {
        return this.iCategoryRepository.list();
    }
}

export { ListCategoryUseCase }