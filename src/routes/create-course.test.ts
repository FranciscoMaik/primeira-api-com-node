import { fakerPT_BR } from "@faker-js/faker";
import request from "supertest";
import { expect, test } from "vitest";
import { server } from "../app.ts";
import { makeAuthenticatedUser } from "../tests/factories/make-user.ts";

test("create course", async () => {
	await server.ready();

	const { token } = await makeAuthenticatedUser("manager");

	const response = await request(server.server)
		.post("/courses")
		.set("Content-Type", "application/json")
		.set("Authorization", token)
		.send({ title: fakerPT_BR.lorem.words(4) });

	expect(response.status).toEqual(201);
	expect(response.body).toEqual({
		courseId: expect.any(String),
	});
});
