import { Router } from "express";
import { SpecificationRepository } from "../modules/car/repositories/SpecificationRepository";

import { ListSpecificationService } from "../modules/car/service/ListSpecificationService";

const specificationsRouters = Router();
const specificationRepository = new SpecificationRepository();

specificationsRouters.post('/', (request, response)=>{
    const { name, description } = request.body;
    const createSpecificationService = new CreateSpecificationService(specificationRepository);
    createSpecificationService.execute({name, description});   
    return response.status(201).send();
});

specificationsRouters.get('/', (request, response) => {
    const listSpecificationService = new ListSpecificationService(specificationRepository);
    return response.json(listSpecificationService.execute());
})

export { specificationsRouters }