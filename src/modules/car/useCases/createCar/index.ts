import { CarsRepository } from "../../repositories/Implementations/CarsRepository";

import { CreateCarUseCase } from "../../useCases/createCar/CreateCarUseCase";
import { CreateCarController } from "../../useCases/createCar/CreateCarController";
const carsRepository = CarsRepository.getInstance();
const createCarUseCase = new CreateCarUseCase(carsRepository);
const createCarController = new CreateCarController(createCarUseCase);

export { createCarController }