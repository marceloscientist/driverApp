import { Router } from "express";
import { carsRouters } from "./cars.routes";
import { categoriesRouters } from "./categories.routes";
import { driversRouters } from "./drivers.routes";
import { specificationsRouters } from "./specifications.routes";

const router = Router();

router.use('/carsRouters', carsRouters)
router.use('/drivers', driversRouters)
router.use('/categories', categoriesRouters)
router.use('/specifications', specificationsRouters)


export { router }