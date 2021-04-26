import { DriversRepository } from "../../repositories/DriversRepository";
import { CreateDriverController } from "./CreateDriverController";
import { CreateDriverUseCase } from "./CreateDriverUseCase";

const driversRepository = new DriversRepository()
const createDriverUseCase = new CreateDriverUseCase(driversRepository)
const createDriverController = new CreateDriverController(createDriverUseCase)

export { createDriverController }