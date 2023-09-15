"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = require("../model/Pessoa");
let pessoa = new Pessoa_1.Pessoa(`Rafael`, `49933736471`, new Date(2000, 9, 15), `000000000000`, `Rua Número 1`, 129, 56);
pessoa.falar();
pessoa.falarFrase(`COLOCA U INO DU CURINTIA CASCAUM!!!!`);
console.log("\n");
let pessoa1 = new Pessoa_1.Pessoa(`Bell`, `11111111111`, new Date(2000, 9, 15), `000000000000`, `Rua Número 1`, 129, 56);
pessoa1.comer();
pessoa1.comerPrato(`Parmegiana`);
console.log("\n");
let pessoa2 = new Pessoa_1.Pessoa(`Jacinto`, `22222222222`, new Date(2000, 9, 15), `000000000000`, `Rua Número 1`, 129, 56);
pessoa2.andar();
pessoa2.andarRapido(23);
console.log("\n");
//# sourceMappingURL=teste.js.map