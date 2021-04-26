import { Request, Response } from "express";
import { ListDriverUseCase } from "./ListDriverUseCase";

class ListDriverController {
    constructor(private listDriverUseCase: ListDriverUseCase) { }
    handle(request: Request, response: Response): Response {
        return response.json(this.listDriverUseCase.execute());
    }

} 

export { ListDriverController }