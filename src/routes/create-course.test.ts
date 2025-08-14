import { test, expect } from "vitest";
import request from "supertest";
import { server } from "../app.ts";
import { fakerPT_BR } from "@faker-js/faker";

test("create course", async () => {
	await server.ready();

	const response = await request(server.server)
		.post("/courses")
		.set("Content-Type", "application/json")
		.send({ title: fakerPT_BR.lorem.words(4) });

	expect(response.status).toEqual(201);
	expect(response.body).toEqual({
		courseId: expect.any(String),
	});
});
