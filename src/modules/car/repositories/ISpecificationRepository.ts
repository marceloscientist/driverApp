import { Specification } from "../model/Specification";


interface ISpecificationRepositoryDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({ name, description }: ISpecificationRepositoryDTO): void; 
    list():Specification[]; 
    findByName(name:string):Specification; 
}

export { ISpecificationRepository, ISpecificationRepositoryDTO }