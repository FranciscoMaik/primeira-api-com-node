import { db } from "./client.ts";
import { courses, enrollments, users } from "./schema.ts";
import { fakerPT_BR } from "@faker-js/faker";
import { hash } from "argon2";

async function seed() {
	const password = await hash("123456");

	const usersInserted = await db
		.insert(users)
		.values([
			{
				name: fakerPT_BR.person.fullName(),
				email: fakerPT_BR.internet.email(),
				role: "student",
				password,
			},
			{
				name: fakerPT_BR.person.fullName(),
				email: fakerPT_BR.internet.email(),
				role: "student",
				password,
			},
			{
				name: fakerPT_BR.person.fullName(),
				email: fakerPT_BR.internet.email(),
				role: "student",
				password,
			},
			{
				name: fakerPT_BR.person.fullName(),
				email: fakerPT_BR.internet.email(),
				role: "student",
				password,
			},
			{
				name: fakerPT_BR.person.fullName(),
				email: fakerPT_BR.internet.email(),
				role: "student",
				password,
			},
			{
				name: fakerPT_BR.person.fullName(),
				email: fakerPT_BR.internet.email(),
				role: "student",
				password,
			},
			{
				name: fakerPT_BR.person.fullName(),
				email: fakerPT_BR.internet.email(),
				role: "student",
				password,
			},
		])
		.returning();

	const coursesInserted = await db
		.insert(courses)
		.values([
			{
				title: fakerPT_BR.lorem.words(4),
				description: fakerPT_BR.lorem.paragraph(),
			},
			{
				title: fakerPT_BR.lorem.words(4),
				description: fakerPT_BR.lorem.paragraph(),
			},
			{
				title: fakerPT_BR.lorem.words(4),
				description: fakerPT_BR.lorem.paragraph(),
			},
		])
		.returning();

	await db.insert(enrollments).values([
		{
			userId: usersInserted[0].id,
			courseId: coursesInserted[0].id,
		},
		{
			userId: usersInserted[1].id,
			courseId: coursesInserted[0].id,
		},
		{
			userId: usersInserted[2].id,
			courseId: coursesInserted[0].id,
		},
		{
			userId: usersInserted[1].id,
			courseId: coursesInserted[1].id,
		},
	]);
}

seed();
