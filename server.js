
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabaseCarrosRapidos } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabaseCarrosRapidos;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/carros', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createCarros(body);
    return reply.status(201).send();
})


// REATE
server.get('/carros', async () => {
    const carros = await databasePostgres.listCarros();
    return carros;
});

// UPDATE
server.put('/carros/:id', async (request, reply) => {
    const carroID = request.params.id;
    const body = request.body;
    await databasePostgres.updateCarro(carroID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/carros/:id', async (request, reply) => {
    const carroID = request.params.id;
    await databasePostgres.deleteCarro(carroID);

    return reply.status(204).send();
})

server.listen({
    port: 3333
});
