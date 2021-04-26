import { ICarRepository } from "../repositories/ICarRepository";

class CreateCarService {
    constructor(private carsRepository: ICarRepository) { }

    execute(name, brand) {
        const carAlreadyExist = this.carsRepository.findByName(name)
        if(carAlreadyExist) {
            throw new Error("Car Already Exist");
        }
        this.carsRepository.create({name, brand});
    }
}

export { CreateCarService }