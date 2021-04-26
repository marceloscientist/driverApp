import { IDriversRepository } from "../../repositories/IDriverRepository";

class ListDriverUseCase {
    constructor(private iDriverRepository: IDriversRepository) { }
    execute() {
        return this.iDriverRepository.list();
    }
}

export { ListDriverUseCase }