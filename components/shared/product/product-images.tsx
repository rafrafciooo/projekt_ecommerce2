"use client";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ images }: { images: string[] }) => {
	console.log(images);
	const [currentImage, setCurrentImage] = useState(0);
	return (
		<div className='space-y-4'>
			<Image
				src={images[currentImage]}
				width={1000}
				height={1000}
				alt='product image'
				priority
				className='min-h-[300px] object-cover object-center'
			/>
			<Separator />
			{images.length > 1 && (
				<div className='grid grid-cols-5 gap-2'>
					{images.map((image, index) => (
						<div
							key={index}
							onClick={() => setCurrentImage(index)}
							className={cn(
								"cursor-pointer rounded-md border hover:border-chart-1",
								currentImage === index && "border-2 border-chart-1"
							)}
						>
							<Image
								src={image}
								width={1000}
								height={1000}
								alt='product image'
								priority
								className='min-h-[50px] object-cover object-center w-full h-full rounded-md'
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default ProductImages;
