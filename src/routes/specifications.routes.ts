import { Router } from "express";
import { createSpecificationController } from "../modules/car/useCases/createSpecification";
import { listSpecificationController } from "../modules/car/useCases/ListSpecification";

const specificationsRouters = Router();

specificationsRouters.post('/', (request, response)=>{
    createSpecificationController.handle(request, response);
});

specificationsRouters.get('/', (request, response) => {
    const all = listSpecificationController.handle(request,response);
    return response.json(all)
})

export { specificationsRouters }