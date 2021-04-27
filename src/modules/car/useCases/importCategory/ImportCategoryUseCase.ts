import csvParse from "csv-parse";

import * as fs from 'fs';
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IImportCategories {
    name: string;
    description: string;
}

class ImportCategoryUseCase {

    constructor(private categoryRepository:ICategoryRepository) { }   

    loadCategories(file: Express.Multer.File):Promise<IImportCategories[]> {
        return new Promise((resolve, reject)=>{
            const stream = fs.createReadStream(file.path) 
            const categories:IImportCategories[] = []
            const parseFile = csvParse()
            stream.pipe(parseFile)
            parseFile.on("data", async (line) => {
                const [name, description] = line;
                categories.push({
                    name,
                    description
                });
            }).on(
                "end",()=>{
                    resolve(categories)
                }
            ).on(
                "error", (err)=>{
                    reject(err)
                }
            )
        })
    }

    async execute(file: Express.Multer.File):Promise<void> {
        const categories = await this.loadCategories(file)
        categories.map(category => {
            const { name, description } = category
            const existCategory = this.categoryRepository.findByName(name)
            if(!existCategory) {
                this.categoryRepository.create({name, description})
            }
        })
    }
}

export { ImportCategoryUseCase }