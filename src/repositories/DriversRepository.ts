import { Driver } from '../model/Driver';

interface IDriverDTO {
    name: string;
    age: number;
    cpf: string;
}

class DriversRepository {

    private drivers: Driver[];

    constructor() {
        const drivers = [];      
    }

    create({name, age, cpf}:IDriverDTO):void {
        const driver = new Driver()
        Object.assign(driver, {
            age,
            name,
            cpf
        })
        this.drivers.push(driver); 
    } 

    list():Driver[] {
        return this.drivers;
    }
}

export { DriversRepository }