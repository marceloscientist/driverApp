import { Category } from "../model/Category";


interface ICategoryRepositoryDTO {
    name: string;
    description: string;
}

interface ICategoryRepository {
    create({ name, description }: ICategoryRepositoryDTO): void; 
    list():Category[]; 
    findByName(name:string):Category; 
}

export { ICategoryRepository, ICategoryRepositoryDTO }