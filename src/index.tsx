import Fastify from "fastify";

const server = Fastify ({
    logger: true,
});

server.get("/", async (request, reply) => {
    return { message: "Hello, Fastify!" };
});

server.listen({ port: 8000 }, (err, address) => {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
    server.log.info(`Server listening on ${address}`);
});