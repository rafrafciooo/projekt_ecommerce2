import { PrismaClient } from "@/lib/generated/prisma";
import { neonConfig } from "@neondatabase/serverless";
import ws from "ws";

// Ustawienie websocket dla Neon
neonConfig.webSocketConstructor = ws;

// Przekazanie connectionString bez adaptera
const connectionString = process.env.DATABASE_URL!;

export const prisma = new PrismaClient({
	datasources: {
		db: {
			url: connectionString,
		},
	},
}).$extends({
	result: {
		product: {
			price: { compute: p => p.price.toFixed(2) },
			rating: { compute: p => p.rating.toFixed(1) },
		},
	},
});
