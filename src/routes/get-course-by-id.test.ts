import request from "supertest";
import { expect, test } from "vitest";
import { server } from "../app.ts";
import { makeCourse } from "../tests/factories/make-course.ts";

test("get course by id", async () => {
	await server.ready();

	const course = await makeCourse();

	const response = await request(server.server).get(`/courses/${course.id}`);

	expect(response.status).toEqual(200);
	expect(response.body).toEqual({
		course: {
			id: expect.any(String),
			title: expect.any(String),
			description: null,
		},
	});
});

test("return 404 when course not found", async () => {
	await server.ready();

	const response = await request(server.server).get(
		`/courses/4f41498d-2140-4ccd-aad7-36519d76a64b`
	);

	expect(response.status).toEqual(404);
});
