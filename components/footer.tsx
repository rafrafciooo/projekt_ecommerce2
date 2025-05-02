import { APP_NAME } from "@/lib/constants";
import React from "react";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='border-t w-full'>
			<div className='p-5 flex-center'>
				<p className='text-sm'>
					{APP_NAME} &copy; {currentYear}. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
