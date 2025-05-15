import React from "react";
import { ModeToggle } from "./modeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Grip, ShoppingCart} from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import UserButton from "./user-button";

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
					<UserButton />
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
						<UserButton />
						<SheetDescription></SheetDescription>
					</SheetContent>
				</Sheet>
			</nav>
		</div>
	);
};

export default Menu;
