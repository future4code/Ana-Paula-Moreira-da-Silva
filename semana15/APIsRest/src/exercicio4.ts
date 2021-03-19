import express, {Request, Response} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";

const app = express();


app.use(express.json());
app.use(cors());

type user = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]

app.post("/users", (req: Request, res: Response) => {
        let errorCode: number = 400

    try {
        
        const reqBody: user ={
            id: Date.now(),
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age
        }

        if (!reqBody.name || !reqBody.email || !reqBody.type || !reqBody.age) {
            errorCode = 422
            throw new Error("Algum campo está inválido, preencha corretamente.")
        }

        users.push(reqBody)
        res.status(200).send({message: "Usuário inserido com sucesso!"})

    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });

// a- Teoricamente não houve mudanças
// b- Sim, apesar de não ser o mais "utilizado" para estas situações. O método POST é mais utilizado para inserir informações e o método PUT é mais utilizado para fazer alterações 