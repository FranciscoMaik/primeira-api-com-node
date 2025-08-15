import { eq } from "drizzle-orm";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { db } from "../database/client.ts";
import { courses } from "../database/schema.ts";
import { getAuthenticatedUser } from "../utils/get-authenticated-user.ts";
import { checkRequestJwt } from "./hooks/check-request-jwt.ts";

export const getCourseByIdRoute: FastifyPluginAsyncZod = async (server) => {
	server.get(
		"/courses/:id",
		{
			preHandler: [checkRequestJwt],
			schema: {
				tags: ["Courses"],
				summary: "Get a course by id",
				params: z.object({
					id: z.uuid(),
				}),
				response: {
					200: z
						.object({
							course: z
								.object({
									id: z.uuid(),
									title: z.string(),
									description: z.string().nullable(),
								})
								.describe("Course found"),
						})
						.describe("Course found"),
					404: z
						.object({
							error: z.string(),
						})
						.describe("Course not found"),
				},
			},
		},
		async (request, reply) => {
			const user = getAuthenticatedUser(request);

			const { id } = request.params;

			const result = await db.select().from(courses).where(eq(courses.id, id));

			if (result.length > 0) {
				return reply.send({ course: result[0] });
			}

			return reply.status(404).send({ error: "Course not found" });
		}
	);
};
