import { Router } from "express";
import { SpecificationRepository } from "../modules/car/repositories/SpecificationRepository";

import { ListSpecificationService } from "../modules/car/service/ListSpecificationService";
import { createSpecificationController } from "../modules/car/useCases/createSpecification";

const specificationsRouters = Router();
const specificationRepository = new SpecificationRepository();
specificationsRouters.post('/', (request, response)=>{
    createSpecificationController.handle(request, response);
});

specificationsRouters.get('/', (request, response) => {
    const listSpecificationService = new ListSpecificationService(specificationRepository);
    return response.json(listSpecificationService.execute());
})

export { specificationsRouters }