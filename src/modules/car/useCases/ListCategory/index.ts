import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";
import { CategoryRepository } from "../../repositories/Implementations/CategoryRepository";

const categoryRepository = CategoryRepository.getInstance(); // Singleton
const listCategoryUseCase = new ListCategoryUseCase(categoryRepository)
const listCategoryController = new ListCategoryController(listCategoryUseCase)

export { listCategoryController }