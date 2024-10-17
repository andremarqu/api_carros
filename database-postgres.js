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
    const nome = carro.nome;
    const local = carro.local;
    const descricao = carro.descricao;

    await sql`insert into carros (id, marca, cor, placa)
    values (${id}, ${marca}, ${cor}, ${placa})`
  }

  async updateCarro(id, carro) {
    const nome = carro.nome;
    const local = carro.local;
    const descricao = carro.descricao;

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
