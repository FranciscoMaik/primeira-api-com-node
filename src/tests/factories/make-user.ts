import { fakerPT_BR } from "@faker-js/faker";
import { hash } from "argon2";
import { randomUUID } from "node:crypto";
import { db } from "../../database/client.ts";
import { users } from "../../database/schema.ts";
import jwt from "jsonwebtoken";

export async function makeUser(role?: "student" | "manager") {
	const passwordBeforeHash = randomUUID();

	const result = await db
		.insert(users)
		.values({
			name: fakerPT_BR.person.fullName(),
			email: fakerPT_BR.internet.email(),
			password: await hash(passwordBeforeHash),
			role: role ?? "student",
		})
		.returning();

	return {
		user: result[0],
		passwordBeforeHash,
	};
}

export async function makeAuthenticatedUser(role: "student" | "manager") {
	const { user } = await makeUser(role);

	if (!process.env.JWT_SECRET) {
		throw new Error("JWT_SECRET is not defined");
	}

	const token = jwt.sign(
		{ sub: user.id, role: user.role },
		process.env.JWT_SECRET
	);

	return { user, token };
}
