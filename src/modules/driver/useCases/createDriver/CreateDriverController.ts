import { Request, Response } from "express";
import { CreateDriverUseCase } from "./CreateDriverUseCase";

class CreateDriverController {
    constructor(private createDriverUseCase: CreateDriverUseCase) { }

    handle(request: Request, response: Response): Response {
        const { name, age, cpf } = request.body;
        this.createDriverUseCase.execute({name, age, cpf});
        return response.status(201).send();   
    }
}

export { CreateDriverController }