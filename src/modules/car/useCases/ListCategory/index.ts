import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";
import { CategoryRepository } from "../../repositories/CategoryRepository";

const categoryRepository = new CategoryRepository()
const listCategoryUseCase = new ListCategoryUseCase(categoryRepository)
const listCategoryController = new ListCategoryController(listCategoryUseCase)

export { listCategoryController }