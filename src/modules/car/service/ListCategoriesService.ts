import { ICategoryRepository } from "../repositories/ICategoryRepository";

class ListCategoriesService {
    constructor(private iCategoryRepository: ICategoryRepository) { }
    execute() {
        return this.iCategoryRepository.list();
    }
}

export { ListCategoriesService }