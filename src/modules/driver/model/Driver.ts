import { v4 as uuidv4 } from 'uuid';

class Driver {
/**
 *
 */
    id?: string;
    name: string;
    age: number;
    cpf: string; 

    constructor() {
        if(!this.id) {
            this.id = uuidv4();
        }
        
    }
}

export { Driver }