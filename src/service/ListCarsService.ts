import { ICarRepository } from "../repositories/ICarRepository";

class ListCarsService {
    constructor(private iCarRepository: ICarRepository) { }
    execute() {
        return this.iCarRepository.list();
    }
}

export { ListCarsService }