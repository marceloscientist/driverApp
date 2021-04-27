import { Driver } from '../../model/Driver';
import { IDriverDTO, IDriversRepository } from '../IDriverRepository';

class DriversRepository implements IDriversRepository {
    private drivers: Driver[];
    private static INSTANCE: DriversRepository

    private constructor() {
        this.drivers = [];      
    }

    public static getInstance(): DriversRepository {
        if(!DriversRepository.INSTANCE) {
            DriversRepository.INSTANCE = new DriversRepository()
        }
        return DriversRepository.INSTANCE
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

    findByName(name:string):Driver {
        const driver = this.drivers.find(driver => driver.name === name)
        return driver;
    }
}

export { DriversRepository }