import { IDriversRepository } from "../repositories/IDriverRepository";

class CreateDriverService {
  constructor(private iDriverRepository: IDriversRepository) {}
  execute({ name, age, cpf }) {
    const driverAlreadyExists = this.iDriverRepository.findByName(name);
    if (driverAlreadyExists) {
      throw new Error("Driver already Exists");
    }
    this.iDriverRepository.create({ name, age, cpf });
  }
}

export { CreateDriverService };
