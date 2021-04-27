import { CarsRepository } from "../../repositories/Implementations/CarsRepository";
import { ListCarController } from "./ListCarController";
import { ListCarUseCase } from "./ListCarUseCase";

const carsRepository = CarsRepository.getInstance();
const listCarUseCase = new ListCarUseCase(carsRepository)
const listCarController = new ListCarController(listCarUseCase)

export { listCarController }