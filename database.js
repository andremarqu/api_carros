import { sql } from './db.js';

export class DatabaseCarrosRapidos {
    async createCarro(CarroRapido) {
        const id = carro.id();
        const marca = carro.marca;
        const cor = carro.cor;
        const placa = carro.placa;

        await sql`insert into carro (id, marca, cor, placa)
        values (${id}, ${marca}, ${cor}, ${placa}`
    }

    async listCarro() {

    }
  
    async updateCarro(id, carro) {
       
    }
  
    async deleteCarro(id) {
       
    }
}