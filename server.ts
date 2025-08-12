import fastify from "fastify"
import crypto from "node:crypto"
import { type } from "node:os"

const server = fastify({
    logger: {
        transport: {
            target: 'pino-pretty',
            options: {
                translateTime: 'HH:MM:ss Z',
                ignore: 'pid,hostname',
            },
        },
    }
})

const coursers = [
    { id: "1", name: "Curso de Node.js" },
    { id: "2", name: "Curso de React.js" },
    { id: "3", name: "Curso de Vue.js" },
]

server.get("/courses", () => {
    return { coursers }
})

server.get("/courses/:id", (request, reply) => {
    type Params = {
        id: string
    }

    const { id } = request.params as Params

    const course = coursers.find((course) => course.id === id)

    if (!course) {
        return reply.status(404).send({ error: "Course not found" })
    }

    return { course }
})

server.post("/courses", (request, reply) => {
    type Body = {
        title: string
    }

    const courseId = crypto.randomUUID()
    const { title } = request.body as Body

    if (!title) {
        return reply.status(400).send({ error: "Title is required" })
    }

    coursers.push({ id: courseId, name: title })
    return reply.status(201).send({ courseId })
})

server.listen({ port: 3333 }).then(() => {
    console.log("Server is running on port 3333")
})