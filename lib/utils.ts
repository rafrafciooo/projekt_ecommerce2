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

// export function formatNumber(num: number): string {
// 	const [int, decimal] = num.toString().split(".");
// 	return decimal ? `${int}.${decimal.padEnd(2, "0")}` : `${int}.00`;
// }
