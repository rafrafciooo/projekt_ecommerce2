import { nullable, z } from "zod";
import { formatPrice } from "./utils";

const currency = z.string().refine(
	value => {
		return /^\d{1,3}(( |\u00a0)?\d{3})*(,\d{2})?$/.test(
			formatPrice(Number(value))
		);
	},
	{
		message: "Podaj poprawną cenę z dokładnością do grosza (np. 99,99)",
	}
);

// dodawanie nowego produktu
export const productInsertSchema = z.object({
	name: z.string().min(3, "Podaj nazwę produktu min. 3 znaki"),
	slug: z.string().min(3, "Podaj slug produktu (min. 3 znaki)"),
	category: z.string().min(3, "Podaj kategorię produktu (min. 3 znaki)"),
	brand: z.string().min(3, "Podaj markę produktu (min. 3 znaki)"),
	description: z.string().min(3, "Podaj opis produktu (min. 3 znaki)"),
	stock: z.coerce.number(),
	images: z.array(z.string()).min(1, "Dodaj przynajmniej jedno zdjęcie"),
	isFeatured: z.boolean(),
	banner: z.string().nullable(),
	price: currency,
});
// walidacja logowania
export const signInSchema = z.object({
	email: z.string().email("Podaj poprawny email"),
	password: z.string().min(6, "Podaj hasło min. 6 znaków"),
});
export const signUpSchema = z
	.object({
		email: z.string().email("Nieprawidłowy adres email"),
		password: z.string().min(6, "Hasło musi mieć co najmniej 6 znaków").max(50),
		confirmPassword: z.string(),
	})
	.refine(data => data.password === data.confirmPassword, {
		message: "Hasła muszą być takie same",
		path: ["confirmPassword"],
	});
// karta produktu
export const cardItemSchema = z.object({
	productId: z.string().min(1, "produkt wymagany"),
	name: z.string().min(1, "nazwa wymagane"),
	slug: z.string().min(1, "slug wymagany"),
	quantity: z.number().int().nonnegative("ilość dodatnia wymagana"),
	image: z.string().min(1, "zdjęcie wymagane"),
	price: currency,
});

export const insertCartSchema = z.object({
	items: z.array(cardItemSchema),
	itemsPrice: currency,
	totalPrice: currency,
	shippingPrice: currency,
	taxPrice: currency,
	sessionCartId: z.string().min(1, "id wymagane"),
	userId: z.string().optional().nullable(),
});
