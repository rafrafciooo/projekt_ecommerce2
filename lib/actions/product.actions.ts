"use server";

import { LATEST_PRODUCTS_LIMIT } from "../constants";
// import { PrismaClient } from "../generated/prisma";
import { convertToJs } from "../utils";
import { prisma } from "@/db/prisma";

// pobieranie najnowszych produktów
export async function getLatestProducts() {
	const data = await prisma.product.findMany({
		take: LATEST_PRODUCTS_LIMIT,
		orderBy: {
			createdAt: "desc",
		},
	});
	return convertToJs(data);
}

// pobieranie produktu do slugu
export async function getProductBySlug(slug: string) {
	return await prisma.product.findFirst({
		where: {
			slug: slug,
		},
	});
}
