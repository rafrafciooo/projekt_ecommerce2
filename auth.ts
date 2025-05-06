import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./db/prisma";
import { compareSync } from "bcrypt-ts-edge";

export const config = {
	pages: {
		signIn: "/zaloguj",
		error: "/zaloguj",
	},
	session: {
		strategy: "jwt" as const,
		maxAge: 30 * 24 * 60 * 60, // 30 dni
	},
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialsProvider({
			credentials: {
				email: { type: "email" },
				password: { type: "password" },
			},
			async authorize(credentials) {
				if (credentials == null) return null;
				// znajdz uzytkownika w bazie danych
				const user = await prisma.user.findFirst({
					where: {
						email: credentials.email as string,
					},
				});
				// spr czy uzytkownik istnieje i czy haslo pasuje
				if (user && user.password) {
					const isMatch = compareSync(
						credentials.password as string,
						user.password
					);
					// jesli tak to zwraca uzytkownika
					if (isMatch) {
						return {
							id: user.id,
							name: user.name,
							email: user.email,
							role: user.role,
						};
					}
				}
				// jesli nie to zwraca null
				return null;
			},
		}),
	],
	callbacks: {
		// eslint-disable-next-line
		async session({ session, user, trigger, token }: any) {
			//userID token
			session.user.id = token.sub;

			// aktualizacja user name
			if (trigger === "update") {
				session.user.name = user.name;
			}

			return session;
		},
	},
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
