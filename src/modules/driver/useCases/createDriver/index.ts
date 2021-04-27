import { DriversRepository } from "../../repositories/Implementations/DriversRepository";
import { CreateDriverController } from "./CreateDriverController";
import { CreateDriverUseCase } from "./CreateDriverUseCase";

const driversRepository = DriversRepository.getInstance()
const createDriverUseCase = new CreateDriverUseCase(driversRepository)
const createDriverController = new CreateDriverController(createDriverUseCase)

export { createDriverController }