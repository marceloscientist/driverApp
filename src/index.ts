import express from "express";
import { carsRouters } from "./routes/cars.routes";
import { driversRouters } from "./routes/drivers.routes";
import { categoriesRouters } from "./routes/categories.routes";
import { specificationsRouters } from "./routes/specifications.routes";


const app = express();

app.use(express.json());
app.use('/cars', carsRouters)
app.use('/drivers', driversRouters)
app.use('/categories', categoriesRouters)
app.use('/specifications', specificationsRouters)

app.listen(3333, ()=>{
    console.log('listening to you!');
})