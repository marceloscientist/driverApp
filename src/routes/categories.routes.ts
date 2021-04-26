import { Router } from "express";
import { CategoryRepository } from "../modules/car/repositories/CategoryRepository";
import { createCategoryController } from "../modules/car/useCases/createCategory";
import { ListCategoriesService } from "../modules/car/service/ListCategoriesService";


const categoriesRouters = Router();
const categoryRepository = new CategoryRepository();

categoriesRouters.post('/', (request, response)=>{
    return createCategoryController.handle(request, response)
    
});

categoriesRouters.get('/', (request, response) => {
    const listCategoriesService = new ListCategoriesService(categoryRepository);
    return response.json(listCategoriesService.execute());
})

export { categoriesRouters }