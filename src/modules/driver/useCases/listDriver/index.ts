import { DriversRepository } from "../../repositories/DriversRepository";
import { ListDriverController } from "./ListDriverController";
import { ListDriverUseCase } from "./ListDriverUseCase";

const driversRepository = new DriversRepository()
const listDriverUseCase = new ListDriverUseCase(driversRepository)
const listDriverController = new ListDriverController(listDriverUseCase)

export { listDriverController } 