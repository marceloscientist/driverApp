import { Router } from "express";
import { CarsRepository } from "../modules/car/repositories/CarsRepository";
import { createCarController } from "../modules/car/useCases/createCar";
import { listCarController } from "../modules/car/useCases/ListCar";

const carsRouters = Router();
const carsRepository = new CarsRepository();

carsRouters.post('/', (request, response)=>{
    createCarController.handle(request, response)
});

carsRouters.get('/', (request, response) => {
    listCarController.handle(request, response)
})

export { carsRouters }