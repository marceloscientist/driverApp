import { Router } from "express";
import { DriversRepository } from "../repositories/DriversRepository"

const driversRouters = Router();
const driversRepository = new DriversRepository();

driversRouters.post('/',(request, response)=>{
    const { name, age, cpf } = request.body;
    driversRepository.create({name, age, cpf});
    return response.status(201).send();
})

driversRouters.get('/',(request, response)=>{
    const all = driversRepository.list();
    return response.json(all);
})

export { driversRouters }