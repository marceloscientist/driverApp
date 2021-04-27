import { IDriversRepository } from "../../repositories/IDriverRepository";

interface IRequest {
  name: string;
  age: number;
  cpf: string;
}


class CreateDriverUseCase {
  constructor(private driverRepository: IDriversRepository) {}

  execute({ name, age, cpf }:IRequest):void {
    const driverAlreadyExists = this.driverRepository.findByName(name)
    if (driverAlreadyExists) {
      throw new Error("Driver already Exists");
    }
    this.driverRepository.create({ name, age, cpf });
  }
}

export { CreateDriverUseCase };
