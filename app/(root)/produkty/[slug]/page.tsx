import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import ProductPrice from "@/components/shared/product/product-price";
import ProductImages from "@/components/shared/product/product-images";
const ProductDetailsPage = async (props: {
	params: Promise<{ slug: string }>;
}) => {
	const { slug } = await props.params;
	const product = await getProductBySlug(slug);
	if (!product) notFound();
	return (
		<>
			<section>
				<div className='grid grid-cols-1 md:grid-cols-5'>
					{/* img */}
					<div className='col-span-2'>
						<ProductImages images={product.images} />
					</div>
					{/* details     */}
					<div className='col-span-2 p-5'>
						<div className='flex flex-col gap-3'>
							<p className='italic text-gray-500'>
								{product.brand} {product.category}
							</p>
							<h1 className='h3-bold'>{product.name}</h1>
							<p>
								ocena: {product.rating} / {product.numReviews}{" "}
							</p>
							<div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
								<ProductPrice
									value={Number(product.price)}
									className='w-20 rounded-full bg-green-100 text-green-900  text-center'
								/>
							</div>
						</div>
						<div className='mt-10'>
							<p className='font-semibold'>Opis</p>
							<p className='text-gray-300'>{product.description}</p>
						</div>
					</div>
					{/* add to cart */}
					<div>
						<Card>
							<CardContent className='px-4 py-2'>
								<div className='mb-2 flex justify-between'>
									<div>Cena</div>
									<div>
										<ProductPrice value={Number(product.price)} />
									</div>
								</div>
								<div className='mb-2 flex'>
									{product.stock > 0 ? (
										<Badge className='rounded-full bg-green-100 text-green-900 text-center'>
											w magazynie
										</Badge>
									) : (
										<Badge variant={"destructive"}>brak w magazynie</Badge>
									)}
								</div>
								{product.stock > 0 && (
									<Button className='w-full mt-5'>Dodaj do koszyka</Button>
								)}
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</>
	);
};

export default ProductDetailsPage;
