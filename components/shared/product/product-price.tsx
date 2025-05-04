import { cn } from "@/lib/utils";
import React from "react";

const ProductPrice = ({
	value,
	className,
}: {
	value: number;
	className?: string;
}) => {
	const stringValue = value.toFixed(2);
	const [intValue, floatValue] = stringValue.split(".");

	return (
		<p className={cn("text-2xl", className)}>
            {intValue}
			<span className='text-sm align-super'>{floatValue}</span>
			<span className='text-sm align-super'>zł</span>
		</p>
	);
};

export default ProductPrice;
