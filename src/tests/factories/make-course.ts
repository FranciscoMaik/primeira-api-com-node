import { fakerPT_BR } from "@faker-js/faker";
import { db } from "../../database/client.ts";
import { courses } from "../../database/schema.ts";

export async function makeCourse(title?: string) {
	const result = await db
		.insert(courses)
		.values({
			title: title ?? fakerPT_BR.lorem.words(4),
		})
		.returning();

	return result[0];
}
