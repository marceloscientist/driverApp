import { Router } from "express";
import { CarsRepository } from "../repositories/CarsRepository";
import { CreateCarService } from "../service/CreateCarService";
import { ListCarsService } from "../service/ListCarsService";

const carsRouters = Router();
const carsRepository = new CarsRepository();

carsRouters.post('/', (request, response)=>{
    const { name, brand } = request.body;
    const createCarService = new CreateCarService(carsRepository);
    createCarService.execute(name, brand);   
    return response.status(201).send();
});

carsRouters.get('/', (request, response) => {
    const listCarsService = new ListCarsService(carsRepository);
    return response.json(listCarsService.execute());
})

export { carsRouters }