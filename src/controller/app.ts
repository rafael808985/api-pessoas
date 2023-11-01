import express from "express";
import { inicializarPessoas, listarPessoas } from "./bancoDeDados";

inicializarPessoas();

const app = express();
const port: number = 3001;

app.use(express.json());

app.get('/', (req, res) => {
    console.log('Recebi sua requisição');

    res.send({ mensagem: "Estou devolvendo a resposta para sua requisição"});
});

app.get('/pessoas', (req, res) => {
    const listaDePessoas = listarPessoas();

    res.json(listaDePessoas);
});

app.listen(port, () => {
    console.log(`Servidor Express ouvindo na endereço http://localhost:${port}/`);
});