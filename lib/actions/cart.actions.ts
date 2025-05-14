"use server";

import { auth } from "@/auth";
import { CartItem } from "@/types";
import { cookies } from "next/headers";

export async function addItemToCart(data: CartItem) {
	try {
		const sessionCartId = (await cookies()).get("sessionCardId")?.value;
		if (!sessionCartId) throw new Error("Nie znaleziono sesji");

		// sesja i user id
		const session = await auth();
		const userID = session?.user?.id ? (session.user.id as string) : undefined;
		console.log("User ID:", userID);
		return {
			success: true,
			message: "Przedmiot został dodany do koszyka",
		};
	} catch (error) {
		return {
			success: false,
			message: 'nie dziala'
		};
	}
}
