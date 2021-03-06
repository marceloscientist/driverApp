import { Category } from "../../model/Category";
import { ICategoryRepository, ICategoryRepositoryDTO } from "../ICategoryRepository";


class CategoryRepository implements ICategoryRepository {
    private categories:Category[];

    /*
    
    Singleton
    
     */
    private static INSTANCE: CategoryRepository;

    private constructor() {
        this.categories = [];
    }

    public static getInstance(): CategoryRepository{
        if(!CategoryRepository.INSTANCE) {
            CategoryRepository.INSTANCE = new CategoryRepository();
        }
        return CategoryRepository.INSTANCE;
    }  


    

    create({ name, description }: ICategoryRepositoryDTO): void {
        const category = new Category();
        Object.assign(category, {
            name, 
            description, 
        })
        this.categories.push(category);
    }

    list():Category[] {
        return this.categories;
    }

    findByName(name:string):Category {
        const category = this.categories.find(category => category.name === name) 
        return category
    } 
}

export {CategoryRepository}




