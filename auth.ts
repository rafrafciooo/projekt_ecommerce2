import NextAuth, { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./db/prisma";
import { compareSync } from "bcrypt-ts-edge";

import { NextResponse } from "next/server";

export const config = {
	pages: {
		signIn: "/zaloguj",
		error: "/zaloguj",
	},
	session: {
		strategy: "jwt",
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
			session.user.role = token.role;
			session.user.name = token.name;

			// aktualizacja user name
			if (trigger === "update") {
				session.user.name = user.name;
			}

			return session;
		},
		// eslint-disable-next-line
		async jwt({ token, user, trigger, session }: any) {
			// Assign user fields to token
			if (user) {
				token.id = user.id;
				token.role = user.role;

				// If user has no name then use the email
				if (user.name === "NO_NAME") {
					token.name = user.email!.split("@")[0];

					// Update database to reflect the token name
					await prisma.user.update({
						where: { id: user.id },
						data: { name: token.name },
					});
				}
			}
			return token;
		},
		//eslint-disable-next-line
		authorized({ request, auth }: any) {
			// spr sesje
			if (!request.cookies.get("sessionCardId")) {
				//tworzenie nowej sesji
				const sessionCardId = crypto.randomUUID();
				// kopiuje ciasteczka
				const newRequestHeaders = new Headers(request.headers);
				//ustawiam nowe ciasteczko
				const response = NextResponse.next({
					request: {
						headers: newRequestHeaders,
					},
				});
				// ustawiam sessionCardId
				response.cookies.set("sessionCardId", sessionCardId);
				return response;
			} else {
				//jesli sesja istnieje to zwraca true
				return true;
			}
		},
	},
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
