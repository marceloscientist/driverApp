import { ICarRepository } from "../../repositories/ICarRepository";

interface IRequest {
    name: string;
    brand: string;
}

class CreateCarUseCase {
    constructor(private carsRepository: ICarRepository) { }

    execute({name, brand}:IRequest):void {
        const carAlreadyExist = this.carsRepository.findByName(name)
        if(carAlreadyExist) {
            throw new Error("Car Already Exist");
        }
        this.carsRepository.create({name, brand});
    }
}

export { CreateCarUseCase }