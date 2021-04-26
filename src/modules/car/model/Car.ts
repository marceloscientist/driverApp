import { v4 as uuidv4 } from "uuid";

class Car {

    id?: string;
    name: string;
    brand: string;

    constructor() {
        if(!this.id) {
            this.id = uuidv4() 
        }
    }
}

export { Car }