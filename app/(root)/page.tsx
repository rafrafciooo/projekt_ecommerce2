import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
	const latestProducts = await getLatestProducts();
	return (
		<>
			<ProductList
				data={latestProducts}
				title='Nowości - usunac bg z obrazkow'
				limit={4}
			/>
		<>
	);
};

export default HomePage;
