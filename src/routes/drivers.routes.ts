import { Router } from "express";
import { DriversRepository } from "../repositories/DriversRepository"
import { CreateDriverService } from "../service/CreateDriverService";
import { ListDriversService } from "../service/ListDriversService";

const driversRouters = Router();
const driversRepository = new DriversRepository();

driversRouters.post('/',(request, response)=>{
    const { name, age, cpf } = request.body;
    const createDriverService = new CreateDriverService(driversRepository);
    createDriverService.execute({name, age, cpf});
    return response.status(201).send();
})

driversRouters.get('/',(request, response)=>{
    const listDriversService = new ListDriversService(driversRepository);
    return response.json(listDriversService);
})

export { driversRouters }