import { z, defineCollection } from "astro:content";
import { file } from "astro/loaders";

const repos = defineCollection({
	loader: file("src/data/repos.json"),
	schema: z.object({
		slug: z.string(),
		prettyName: z.string(),
		description: z.string(),
		repos: z.array(
			z.object({
				name: z.string(),
				description: z.string(),
				starCount: z.number(),
				url: z.string().url(),
			})
		),
	}),
});

const reviews = defineCollection({
	loader: file("src/data/reviews.json"),
	schema: z.object({
		author: z.string(),
		review: z.string(),
	}),
});

const gallery = defineCollection({
	loader: file("src/data/gallery.json"),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			alt: z.string(),
			image: image(),
		}),
});

export const collections = { reviews, gallery, repos };
