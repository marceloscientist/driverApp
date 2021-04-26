import { Router } from "express";
import { CategoryRepository } from "../modules/car/repositories/CategoryRepository";
import { CreateCategoryService } from "../modules/car/service/CreateCategoryService";
import { ListCategoriesService } from "../modules/car/service/ListCategoriesService";

const categoriesRouters = Router();
const categoryRepository = new CategoryRepository();

categoriesRouters.post('/', (request, response)=>{
    const { name, description } = request.body;
    const createCategoryService = new CreateCategoryService(categoryRepository);
    createCategoryService.execute({name, description});   
    return response.status(201).send();
});

categoriesRouters.get('/', (request, response) => {
    const listCategoriesService = new ListCategoriesService(categoryRepository);
    return response.json(listCategoriesService.execute());
})

export { categoriesRouters }