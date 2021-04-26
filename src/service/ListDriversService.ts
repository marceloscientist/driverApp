import { IDriversRepository } from "../repositories/IDriverRepository";

class ListDriversService {
    constructor(private iDriverRepository: IDriversRepository) { }
    execute() {
        return this.iDriverRepository.list();
    }
}

export { ListDriversService }