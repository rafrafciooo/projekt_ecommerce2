import Image from "next/image";

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='flex min-h-screen w-full'>
			{/* formularz */}
			<div className='w-full md:w-1/2 flex items-center justify-center p-4'>
				{children}
			</div>

			{/* obrazek */}
			<div className='hidden md:block md:w-1/2 relative'>
				<Image
					src='/images/auth.jpg'
					alt='Ilustracja logowania'
					fill
					className='object-cover'
					priority
				/>
			</div>
		</div>
	);
}
