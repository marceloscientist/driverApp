import { Router } from "express";
import { DriversRepository } from "../modules/driver/repositories/DriversRepository"
import { ListDriversService } from "../modules/driver/service/ListDriversService";
import { createDriverController } from "../modules/driver/useCases";

const driversRouters = Router();
const driversRepository = new DriversRepository();

driversRouters.post('/',(request, response)=>{
    createDriverController.handle(request, response)
})

driversRouters.get('/',(request, response)=>{
    const listDriversService = new ListDriversService(driversRepository);
    return response.json(listDriversService);
})

export { driversRouters }