"use client";
import { Button } from "@/components/ui/button";
import { addItemToCart } from "@/lib/actions/cart.actions";
import { CartItem } from "@/types";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const AddToCart = ({ item }: { item: CartItem }) => {
	const router = useRouter();
	const handleAddToCart = async () => {
		const res = await addItemToCart(item);

		if (!res.success) {
			toast.error(res.message);
			return;
		}
		//toast sukces dodania do koszuka
		toast("Przedmiot został dodany do koszyka", {
			action: {
				label: "Zobacz koszyk",
				onClick: () => router.push("/koszyk"),
			},
		});
	};
	return (
		<Button type='button' onClick={handleAddToCart}>
			<Plus /> Dodaj do koszyka
		</Button>
	);
};

export default AddToCart;
