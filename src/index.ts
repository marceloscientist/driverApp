import express from "express";
import { carsRouters } from "./routes/cars.routes";
import { driversRouters } from "./routes/drivers.routes";


const app = express();

app.use(express.json());
app.use('/cars', carsRouters)
app.use('/drivers', driversRouters)

app.listen(3333, ()=>{
    console.log('listening to you!');
})