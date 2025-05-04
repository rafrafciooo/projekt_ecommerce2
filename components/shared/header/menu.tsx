import React from "react";
import { ModeToggle } from "./modeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Grip, ShoppingCart, UserIcon } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
	return (
		<div className='flex justify-end gap-3'>
			<nav className='hidden md:flex w-full max-w-xs gap-1'>
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
			</nav>
			<nav className='md:hidden '>
				<Sheet>
					<SheetTrigger className='align-middle'>
						<Grip />
					</SheetTrigger>
					<SheetContent className='flex flex-col items-start p-6'>
						<SheetTitle>Menu</SheetTitle>
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
						<SheetDescription></SheetDescription>
					</SheetContent>
				</Sheet>
			</nav>
		</div>
	);
};

export default Menu;
