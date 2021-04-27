import { CategoryRepository } from "../../repositories/Implementations/CategoryRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoryRepository = CategoryRepository.getInstance()
const importCategoryUseCategory = new ImportCategoryUseCase(categoryRepository)
const importCategoryController = new ImportCategoryController(importCategoryUseCategory)

export { importCategoryController }