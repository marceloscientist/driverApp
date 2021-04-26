import { Request, Response } from "express";
import { ListCarUseCase } from "./ListCarUseCase";

class ListCarController {
    constructor(private listCarUseCase: ListCarUseCase) { }
    handle(request: Request, response: Response): Response {
        return response.json(this.listCarUseCase.execute())
    }
}

export { ListCarController }