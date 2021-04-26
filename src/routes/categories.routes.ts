import { Router } from "express";
import { CategoryRepository } from "../modules/car/repositories/CategoryRepository";
import { createCategoryController } from "../modules/car/useCases/createCategory";
import { listCategoryController } from "../modules/car/useCases/ListCategory";


const categoriesRouters = Router();
const categoryRepository = new CategoryRepository();

categoriesRouters.post('/', (request, response)=>{
    createCategoryController.handle(request, response)
    
});

categoriesRouters.get('/', (request, response) => {
    listCategoryController.handle(request, response)
})

export { categoriesRouters }