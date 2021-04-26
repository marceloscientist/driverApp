import { Specification } from "../model/Specification";
import { ISpecificationRepository, ISpecificationRepositoryDTO } from "./ISpecificationRepository";


class SpecificationRepository implements ISpecificationRepository {
    private specifications:Specification[];

    constructor() {
        this.specifications = [];
    }

    create({ name, description }: ISpecificationRepositoryDTO): void {
        const specification = new Specification();
        Object.assign(specification, {
            name, 
            description, 
        })
        this.specifications.push(specification);
    }

    list():Specification[] {
        return this.specifications;
    }

    findByName(name:string):Specification {
        const specification = this.specifications.find(specification => specification.name === name) 
        return specification
    } 
}

export {SpecificationRepository}




