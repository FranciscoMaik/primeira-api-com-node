import type { FastifyReply, FastifyRequest } from "fastify";
import { getAuthenticatedUser } from "../../utils/get-authenticated-user.ts";

export function checkUserRole(role: "student" | "manager") {
	return async function checkUserRole(
		request: FastifyRequest,
		reply: FastifyReply
	) {
		const user = getAuthenticatedUser(request);

		if (user.role !== role) {
			return reply.status(401).send();
		}
	};
}
