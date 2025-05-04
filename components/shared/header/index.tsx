import { APP_NAME } from "@/lib/constants";

import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";

const Header = () => {
	return (
		<header className='border-b w-full '>
			<div className='wrapper flex-between'>
				<div className='flex-start '>
					<Link href='/' className='flex-start'>
						<Image
							src='/images/logo.svg'
							width={50}
							height={50}
							alt={`${APP_NAME} logo`}
							priority={true}
						/>
						<span className='hidden lg:block font-bold text-2xl ml-3'>
							{APP_NAME}
						</span>
					</Link>
				</div>
	
	<Menu />
			</div>
		</header>
	);
};

export default Header;
