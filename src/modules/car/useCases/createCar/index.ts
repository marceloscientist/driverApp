import { CarsRepository } from "../../repositories/CarsRepository";

import { CreateCarUseCase } from "../../useCases/createCar/CreateCarUseCase";
import { CreateCarController } from "../../useCases/createCar/CreateCarController";
const carsRepository = new CarsRepository();
const createCarUseCase = new CreateCarUseCase(carsRepository);
const createCarController = new CreateCarController(createCarUseCase);

export { createCarController }