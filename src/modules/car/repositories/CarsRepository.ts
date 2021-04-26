import { Car } from "../model/Car";
import { ICarRepository, ICarRepositoryDTO } from "./ICarRepository";


class CarsRepository implements ICarRepository {
    private cars:Car[];

    constructor() {
        this.cars = [];
    }

    create({ name, brand }: ICarRepositoryDTO): void {
        const car = new Car();
        Object.assign(car, {
            name, 
            brand, 
        })
        this.cars.push(car);
    }

    list():Car[] {
        return this.cars;
    }

    findByName(name:string):Car {
        const car = this.cars.find(car => car.name === name) 
        return car
    } 
}

export {CarsRepository}




