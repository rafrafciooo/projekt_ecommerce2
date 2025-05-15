"use server";

import { signIn, signOut } from "@/auth";
import { signInSchema, signUpSchema } from "../validators";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { hashSync } from "bcrypt-ts-edge";
import { prisma } from "@/db/prisma";
import { formatError } from "../utils";

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

// rejestracja
export async function SignUpUser(prevState: unknown, formData: FormData) {
	try {
		const user = signUpSchema.parse({
			email: formData.get("email"),
			password: formData.get("password"),
			confirmPassword: formData.get("confirmPassword"),
		});
		user.password = hashSync(user.password, 10);
		const rawPassword = formData.get("password") as string;
		const hashedPassword = hashSync(rawPassword, 10);

		await prisma.user.create({
			data: {
				email: user.email,
				password: hashedPassword,
			},
		});

		await signIn("credentials", {
			email: user.email,
			password: rawPassword, // teraz przekazujemy czyste hasło
		});
		return { success: true, message: "Zarejestrowano pomyślnie" };
	} catch (error) {
		if (isRedirectError(error)) {
			throw error;
		}
		return { success: false, message: formatError(error) };
	}
}
