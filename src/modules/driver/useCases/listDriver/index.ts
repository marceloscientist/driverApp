import { DriversRepository } from "../../repositories/Implementations/DriversRepository";
import { ListDriverController } from "./ListDriverController";
import { ListDriverUseCase } from "./ListDriverUseCase";

const driversRepository = DriversRepository.getInstance()
const listDriverUseCase = new ListDriverUseCase(driversRepository)
const listDriverController = new ListDriverController(listDriverUseCase)

export { listDriverController } 