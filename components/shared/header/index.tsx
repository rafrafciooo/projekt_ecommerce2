import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./modeToggle";


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
				<div className='space-x-2'>
					<ModeToggle />
					<Button asChild variant={"ghost"}>
						<Link href='/koszyk'>
							<ShoppingCart /> Koszyk
						</Link>
					</Button>
					<Button asChild variant={"outline"}>
						<Link href='/zaloguj'>
							<UserIcon /> Zaloguj
						</Link>
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
