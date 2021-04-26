import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

class ListCategoryController {
    constructor(private listCategoryUseCase: ListCategoryUseCase) {}

    handle(request: Request, response: Response): Response {
        return response.json(this.listCategoryUseCase.execute());
    }
}

export { ListCategoryController }