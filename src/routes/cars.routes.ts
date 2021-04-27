import { Router } from "express";
import { createCarController } from "../modules/car/useCases/createCar";
import { listCarController } from "../modules/car/useCases/ListCar";

const carsRouters = Router();

carsRouters.post('/', (request, response)=>{
    createCarController.handle(request, response)
});

carsRouters.get('/', (request, response) => {
    listCarController.handle(request, response)
})

export { carsRouters }