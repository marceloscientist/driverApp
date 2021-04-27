import { Router } from "express";
import { createCategoryController } from "../modules/car/useCases/createCategory";
import { listCategoryController } from "../modules/car/useCases/ListCategory";


const categoriesRouters = Router();


categoriesRouters.post('/', (request, response)=>{
    createCategoryController.handle(request, response)
    
});

categoriesRouters.get('/', (request, response) => {
    listCategoryController.handle(request, response)
})

export { categoriesRouters }