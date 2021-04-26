import { v4 as uuidv4 } from 'uuid';

class Driver {
/**
 *
 */
    private id?: string;
    private name: string;
    private age: number;
    private cpf: string; 

    constructor() {
        if(!this.id) {
            this.id = uuidv4();
        }
        
    }
}

export { Driver }