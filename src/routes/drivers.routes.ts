import { Router } from "express";

import { createDriverController } from "../modules/driver/useCases/createDriver";
import { listDriverController } from "../modules/driver/useCases/listDriver";

const driversRouters = Router();

driversRouters.post('/',(request, response)=>{
    createDriverController.handle(request, response)
})

driversRouters.get('/',(request, response)=>{
    listDriverController.handle(request, response)
})

export { driversRouters }