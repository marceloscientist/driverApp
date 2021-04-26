import { CarsRepository } from "../../repositories/CarsRepository";
import { ListCarController } from "./ListCarController";
import { ListCarUseCase } from "./ListCarUseCase";

const carsRepository = new CarsRepository()
const listCarUseCase = new ListCarUseCase(carsRepository)
const listCarController = new ListCarController(listCarUseCase)

export { listCarController }