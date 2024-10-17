import { sql } from './db.js'

sql`
  CREATE TABLE carros (
      id text PRIMARY KEY,
      marca character varying(255),
      cor character varying(255),
      placa character varying(255)
  );
`.then(() => {
  console.log('Tabela Criada com Sucesso!');
})