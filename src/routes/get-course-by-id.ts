import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import { db } from "../database/client.ts"
import { courses } from "../database/schema.ts"
import z from "zod"
import { eq } from "drizzle-orm"

export const getCourseByIdRoute: FastifyPluginAsyncZod = async (server) => {
    server.get("/courses/:id", {
        schema: {
            tags: ["Courses"],
            summary: "Get a course by id",
            params: z.object({
                id: z.uuid()
            }),
            response: {
                200: z.object({
                    course: z.object({
                        id: z.uuid(),
                        title: z.string()
                    }).describe("Course found")
                })
                .describe("Course found"),
                404: z.object({
                    error: z.string()
                }).describe("Course not found")
            }
        }
    }, async(request, reply) => {
    const { id } = request.params

    const result = await db
        .select()
        .from(courses)
        .where(eq(courses.id, id))

    if (result.length > 0) {
        return reply.send({ course: result[0] })
    }
    
    return reply.status(404).send({ error: "Course not found" })
})
}