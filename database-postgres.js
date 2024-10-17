import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabaseCarrosRapidos {
  async listCarros() {
    const carros = await sql`select * from carros`;
    return carros;
  }

  async createCarros(carro) {
    const id = randomUUID();
    console.log('id', id);
    const marca = carro.marca;
    const cor = carro.cor;
    const placa = carro.placa;

    await sql`insert into carros (id, marca, cor, placa)
    values (${id}, ${marca}, ${cor}, ${placa})`
  }

  async updateCarro(id, carro) {
    const marca = carro.marca;
    const cor = carro.cor;
    const placa = carro.placa;

    await sql`update carros set 
        marca = ${marca},
        cor = ${cor},
        placa = ${placa}
        where id = ${id}
    `;
  }

  async deleteCarro(id) {
    await sql`delete from carros where id = ${id}`
  }
}
