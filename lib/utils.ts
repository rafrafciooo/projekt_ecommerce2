import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

//konwer prisma objekt na js
export function convertToJs<T>(value: T): T {
	return JSON.parse(JSON.stringify(value));
}

// formatowanie liczby z przecinkiem na dwa miejsca po przecinku
export function formatPrice(value: number) {
	return new Intl.NumberFormat("pl-PL", {
		style: "currency",
		currency: "PLN",
		minimumFractionDigits: 2,
	}).format(value);
}

// format bledow
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function formatError(error: any) {
	if (error.name === "ZodError") {
		// zod error
		const filedErrors = Object.keys(error.errors).map(
			field => error.errors[field].message
		);
		return filedErrors.join(", ");
	} else if (
		error.name === "PrismaClientKnownRequestError" &&
		error.code === "P2002"
	) {
		// prisma error
		const field = error.meta?.target ? error.meta.target[0] : "email";
		return `Ten ${field} już istnieje w bazie danych`;
	} else {
		// inne bledy
		return typeof error.message === "string"
			? error.message
			: JSON.stringify(error.message);
	}
}

// export function formatNumber(num: number): string {
// 	const [int, decimal] = num.toString().split(".");
// 	return decimal ? `${int}.${decimal.padEnd(2, "0")}` : `${int}.00`;
// }
