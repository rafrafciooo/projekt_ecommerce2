import React from "react";
import { SignOutUser } from "@/lib/actions/user.actions";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";

import Link from "next/link";
import { UserIcon } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

const UserButton = async () => {
	const session = await auth();

	if (!session) {
		return (
			<Button asChild>
				<Link href='/zaloguj'>
					<UserIcon /> Zaloguj
				</Link>
			</Button>
		);
	}
	const firstInitial = session.user?.name?.charAt(0).toUpperCase();

	return (
		<div className='gap-2 flex items-center'>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<div className='flex items-center'>
						<Button
							variant='ghost'
							className='w-10 h-10 rounded-full bg-accent'
						>
							{firstInitial}
						</Button>
					</div>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end' className='w-48' forceMount>
					<div className='flex flex-col space-y-1'>
						<p className='text-sm'> {session.user?.name}</p>
						<p className='text-xs text-muted-foreground'>
							{session.user?.email}
						</p>
					</div>
					<Separator className='my-2' />

					<DropdownMenuItem>
						<form action={SignOutUser} className='w-full'>
							<Button
								className='w-full py-4 px-2 h-4 justify-start'
								variant='ghost'
							>
								Wyloguj
							</Button>
						</form>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default UserButton;
