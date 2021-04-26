import { Car } from "../model/Car";


interface ICarRepositoryDTO {
    name: string;
    brand: string;
}

interface ICarRepository {
    create({ name, brand }: ICarRepositoryDTO): void; 
    list():Car[]; 
    findByName(name:string):Car; 
}

export { ICarRepository, ICarRepositoryDTO }