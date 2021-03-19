import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { countries } from "./countries";

const app: Express = express();

app.use(express.json());
app.use(cors());



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

app.get('/countries/search', (req: Request, res: Response) => {

    const country: string = req.query.country as string;
    const myCountries = countries;
    const filteredCountries = myCountries.filter((ctr) => {
        return ctr.name.includes(country);
    });
 
    if (filteredCountries.length) {
        res.status(201).send(filteredCountries);
    } else {
        res.status(404).send("Not Found");
    }
 
 });
 
 app.get('/countries/:id', (req: Request, res: Response) => {
 
    
    const id: number = Number(req.params.id);
 
    
    const country = countries.find((ctr) => {
        return ctr.id === id;
    });
 
   
    res.status(200).send(country);
 
 });
 
 app.delete("/countries/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
 
 
 
        const authorization = req.headers.authorization;
        if (!authorization) {
            errorCode = 401;
            throw new Error("Invalid authorization. ");
        }
 
        const id = Number(req.params.id);
        if (isNaN(id)) {
            throw new Error("Invalid id type. ");
        }
 
        const myCountries = countries;
 
        const countryIndex = myCountries.findIndex((ctr) => {
            return ctr.id === id;
        });
 
        if (countryIndex < 0) {
            errorCode = 404;
            throw new Error("Country not found");
        }
 
        countries.splice(countryIndex, 1);
 
        res.status(200).send("PAIS APAGADO COM SUCESSO");
 
    } catch (error) {
        res.status(errorCode).send({ status: "FAILED", message: error.message });
    }
 
 });
 
 app.listen(3004, () => {
    console.log("Servidor rodando no endereço http://localhost:3004");
 }); 