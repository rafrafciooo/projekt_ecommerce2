import Image from "next/image";
import React from "react";

const LoadingPage = () => {
	return (
		<div className="flex-center h-screen">
			<Image
				src='/loader.gif'
				width={200}
				height={200}
				alt='logo'
				priority={true}
			/>
		</div>
	);
};

export default LoadingPage;
