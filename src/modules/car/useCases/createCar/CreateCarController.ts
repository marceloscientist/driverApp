import { Request, Response } from "express";
import { CreateCarUseCase } from "./CreateCarUseCase";

class CreateCarController {

    constructor(private createCarUseCase: CreateCarUseCase) { }
    handle(request: Request, response: Response): Response {
        const { name, brand } = request.body;
        this.createCarUseCase.execute({name, brand});   
        return response.status(201).send();   
    }
}

export { CreateCarController }

