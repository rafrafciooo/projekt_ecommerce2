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
import SignUpForm from "./signup-form";



export const metadata: Metadata = {
	title: "Zarejestruj się",
};
const SignUpPage = async () => {


	return (
		<div className='w-full max-w-md'>
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
					<CardTitle className='text-center h3-bold'>Rejestracja</CardTitle>
					<CardDescription className='text-center mb-5'>
                        Zarejestruj się by złożyć zamówienie
					</CardDescription>
					<CardContent className='space-y-4'>
					<SignUpForm />
					</CardContent>
				</CardHeader>
			</Card>
		</div>
	);
};

export default SignUpPage;
