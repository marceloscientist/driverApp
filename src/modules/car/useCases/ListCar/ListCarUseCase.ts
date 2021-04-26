import { ICarRepository } from "../../repositories/ICarRepository";

class ListCarUseCase {
    constructor(private iCarRepository: ICarRepository) { }
    execute() {
        return this.iCarRepository.list();
    }
}

export { ListCarUseCase }