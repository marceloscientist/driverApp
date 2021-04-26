import { IDriversRepository } from "../../repositories/IDriverRepository";

interface IRequest {
  name: string;
  age: number;
  cpf: string;
}


class CreateDriverUseCase {
  constructor(private iDriverRepository: IDriversRepository) {}
  execute({ name, age, cpf }:IRequest) {
    const driverAlreadyExists = this.iDriverRepository.findByName(name);
    if (driverAlreadyExists) {
      throw new Error("Driver already Exists");
    }
    this.iDriverRepository.create({ name, age, cpf });
  }
}

export { CreateDriverUseCase };
