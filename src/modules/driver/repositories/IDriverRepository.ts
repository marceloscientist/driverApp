import { Driver } from '../model/Driver';

interface IDriverDTO {
    name: string;
    age: number;
    cpf: string;
}

interface IDriversRepository {
    create({name, age, cpf}:IDriverDTO):void;       
    list():Driver[];
    findByName(name:string):Driver;
}

export { IDriversRepository, IDriverDTO }