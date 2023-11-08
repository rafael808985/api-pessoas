import express from "express";
import cors from 'cors';
import { inicializarPessoas, listarPessoas } from "./bancoDeDados";
import { Pessoa } from "../model/Pessoa";
import { persistirPessoa } from "./bancoDeDados";

inicializarPessoas();

const app = express();
const port: number = 9999;

app.use(express.json());
app.use(cors());

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

// Rota para cadastrar uma pessoa
app.post('/cadastro', (req, res) => {
    // Recuperando as informações JSON que vieram no corpo (body) da requisição (req) e desestruturando essa informação para cada atributo
const { nome, cpf, data_nascimento, telefone, endereco, altura, peso } = req.body;

    // Criando um novo objeto do tipo Pessoa com as informações recuperadas da requisição
const pessoa = new Pessoa(nome, cpf, new Date(data_nascimento), telefone, endereco, altura, peso);

    // Apenas imprimindo as informações do objeto no console do servidor
console.log(pessoa);

    // Chamando a função para persistir (salvar) os dados da pessoa no banco de dados
persistirPessoa(pessoa);

    // Resposta que o servidor irá enviar ao front-end (A resposta será estrutura em um JSON)
res.json({ mensagem: "Pessoa cadastrada com sucesso" })
})