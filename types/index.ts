import {
	cardItemSchema,
	insertCartSchema,
	productInsertSchema,
} from "@/lib/validators";
import { z } from "zod";

export type Product = z.infer<typeof productInsertSchema> & {
	id: string;
	rating: string;
	createdAt: Date;
};
export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cardItemSchema>;
