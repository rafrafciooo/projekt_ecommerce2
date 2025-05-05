"use server";

import { signIn, signOut } from "@/auth";
import { signInSchema } from "../validators";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export async function SignInUser(prevState: unknown, formData: FormData) {
	try {
		const user = signInSchema.parse({
			email: formData.get("email"),
			password: formData.get("password"),
		});
		await signIn("credentials", user);
		return { success: true, message: "Zalogowano pomyślnie" };
	} catch (error) {
		if (isRedirectError(error)) {
			throw error;
		}
		return { success: false, message: "Błędny email lub hasło" };
	}
}

// wylogowanie
export async function SignOutUser() {
	await signOut();
}
