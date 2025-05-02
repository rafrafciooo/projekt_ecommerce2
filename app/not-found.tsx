"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";

const NotFoundPage = () => {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<Image
				src='/images/logo.svg'
				width={100}
				height={100}
				alt={`${APP_NAME} logo`}
				priority={true}
				className='mb-5'
			/>

			<div className='p-6 rounded-md shadow-md shadow-amber-500/50 text-center '>
				<h1 className='text-3xl fony-bold mb-3'>Nie znaleziono strony</h1>

				<p className='text-destructive'>Strona której szukasz nie istnieje</p>
				<Button asChild variant={"outline"} className='mt-4 ml-2'>
					<Link href='/'>Powrót do strony głównej</Link>
				</Button>
			</div>
		</div>
	);
};

export default NotFoundPage;
