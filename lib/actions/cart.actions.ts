"use server";

import { auth } from "@/auth";
import { CartItem } from "@/types";
import { cookies } from "next/headers";
import { formatError } from "../utils";
import { prisma } from "@/db/prisma";

export async function addItemToCart(data: CartItem) {
	try {
		const sessionCartId = (await cookies()).get("sessionCardId")?.value;
		if (!sessionCartId) throw new Error("Nie znaleziono sesji");

		// sesja i user id
		const session = await auth();
		const userID = session?.user?.id ? (session.user.id as string) : undefined;

		return {
			success: true,
			message: "Przedmiot został dodany do koszyka",
		};
	} catch (error) {
		return {
			success: false,
			message: formatError(error),
		};
	}
}

export async function getMyCart() {
	const sessionCartId = (await cookies()).get("sessionCardId")?.value;
	if (!sessionCartId) throw new Error("Nie znaleziono sesji");

	// sesja i user id
	const session = await auth();
	const userID = session?.user?.id ? (session.user.id as string) : undefined;

	// karta z bazy danych
	const cart = await prisma.cart.findFirst({
		where: userID ? { userId: userID } : { sessionCartId: sessionCartId },
	});

	if(!cart) return undefined
}
