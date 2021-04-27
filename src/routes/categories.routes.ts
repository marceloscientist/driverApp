import { request, response, Router } from "express";
import multer from "multer";
import { createCategoryController } from "../modules/car/useCases/createCategory";
import { importCategoryController } from "../modules/car/useCases/importCategory";
import { listCategoryController } from "../modules/car/useCases/ListCategory";

const categoriesRouters = Router();
const upload = multer({
    "dest": "./temp"
})

categoriesRouters.post('/', (request, response)=>{
    createCategoryController.handle(request, response)
    
});

categoriesRouters.get('/', (request, response) => {
    listCategoryController.handle(request, response)
})

categoriesRouters.post('/import', upload.single("file") ,(request, response)=> {
    importCategoryController.handle(request, response)
})

export { categoriesRouters }