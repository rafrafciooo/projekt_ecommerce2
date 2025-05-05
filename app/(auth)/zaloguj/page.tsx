import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignInForm from "./signin-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	title: "Zaloguj się",
};
const SignInPage = async () => {
	const session = await auth();
	if (session) {
		return redirect("/");
	}

	return (
		<div className='w-full max-w-md mx-auto'>
			<Card>
				<CardHeader>
					<Link href='/' className='w-full flex justify-center'>
						<Image
							src={"/images/logo.svg"}
							width={100}
							height={100}
							alt={`${APP_NAME} logo`}
							priority={true}
							className='mb-5'
						/>
					</Link>
					<CardTitle className='text-center h3-bold'>Logowanie</CardTitle>
					<CardDescription className='text-center'>
						Zaloguj się do swojego konta
					</CardDescription>
					<CardContent className='space-y-4'>
						<SignInForm />
					</CardContent>
				</CardHeader>
			</Card>
		</div>
	);
};

export default SignInPage;
