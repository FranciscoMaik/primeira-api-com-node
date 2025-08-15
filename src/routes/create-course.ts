import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { db } from "../database/client.ts";
import { courses } from "../database/schema.ts";
import { checkRequestJwt } from "./hooks/check-request-jwt.ts";
import { checkUserRole } from "./hooks/check-user-role.ts";

export const createCourseRoute: FastifyPluginAsyncZod = async (server) => {
	server.post(
		"/courses",
		{
			preHandler: [checkRequestJwt, checkUserRole("manager")],
			schema: {
				tags: ["Courses"],
				summary: "Create a new course",
				body: z.object({
					title: z.string().min(5, "Title must be at least 5 characters"),
				}),
				response: {
					201: z
						.object({
							courseId: z.uuid(),
						})
						.describe("Course created with success"),
				},
			},
		},
		async (request, reply) => {
			const { title } = request.body;

			const result = await db
				.insert(courses)
				.values({
					title: title,
				})
				.returning();
			return reply.status(201).send({ courseId: result[0].id });
		}
	);
};
