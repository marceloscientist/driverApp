import { Router } from "express";
import { CarsRepository } from "../modules/car/repositories/CarsRepository";
import { ListCarsService } from "../modules/car/service/ListCarsService";
import { createCarController } from "../modules/car/useCases/createCar";

const carsRouters = Router();
const carsRepository = new CarsRepository();

carsRouters.post('/', (request, response)=>{
    return createCarController.handle(request, response)
});

carsRouters.get('/', (request, response) => {
    const listCarsService = new ListCarsService(carsRepository);
    return response.json(listCarsService.execute());
})

export { carsRouters }