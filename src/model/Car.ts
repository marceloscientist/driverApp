import { v4 as uuidv4 } from "uuid";

class Car {

    private id?: string;
    private name: string;
    private brand: string;

    constructor() {
        if(!this.id) {
            this.id = uuidv4() 
        }
    }
}

export { Car }