import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductPrice from "./product-price";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
	return (
		<Card className="max-w-sm">
			<CardHeader className='flex justify-center items-center overflow-hidden'>
				<Link href={`/produkty/${product.slug}`}>
					<Image
						src={product.images[0]}
						width={300}
						height={300}
						alt={product.name}
						priority
						className='hover:scale-105 hoverEffect '
					/>
				</Link>
			</CardHeader>
			<CardContent className='p-4 grid gap-4'>
				<p className='text-xs'>{product.brand}</p>
				<Link href={`/produkt/${product.slug}`}>
					<h2 className='text-sm font-medium'>{product.name}</h2>
				</Link>
				<div className='flex-between gap-4'>
					<p>{Number(product.rating)}</p>
					{product.stock > 0 ? (
						<ProductPrice value={Number(product.price)} />
					) : (
						<p className='text-destructive'>Niedostępny</p>
					)}
				</div>
			</CardContent>
		</Card>
	);
};

export default ProductCard;
