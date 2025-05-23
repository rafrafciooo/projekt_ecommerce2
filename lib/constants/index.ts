export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Demo sklepu";
export const APP_DESCRIPTION =
	process.env.NEXT_PUBLIC_APP_DESCRIPTION || "Demo sklepu next prisma postgres";
export const SERVER_URL =
	process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
export const LATEST_PRODUCTS_LIMIT =
	Number(process.env.LATEST_PRODUCTS_LIMIT) || 6;
export const signInDefaultValues = {
	email: "admin@admin.pl",
	password: "123456",
};
export const signUpDefaultValues = {
	email: "test@test.pl",
	password: "123456",
	confirmPassword: "123456",
};
