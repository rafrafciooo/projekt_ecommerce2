"use client";

import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

export function ModeToggle() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					size='icon'
					className='focus-visible:ring-0 focus-visible:ring-offset-0'
				>
					{theme === "system" ? (
						<SunMoon />
					) : theme === "dark" ? (
						<Moon />
					) : (
						<Sun />
					)}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem
					onClick={() => setTheme("light")}
					className={theme === "light" ? "bg-muted font-medium" : ""}
				>
					<Sun className='mr-2 h-5 w-5' />
					<span className='flex-1'>Jasny</span>
				</DropdownMenuItem>

				<DropdownMenuItem
					onClick={() => setTheme("dark")}
					className={theme === "dark" ? "bg-muted font-medium" : ""}
				>
					<Moon className='mr-2 h-5 w-5' />
					<span className='flex-1'>Ciemny</span>
				</DropdownMenuItem>

				<DropdownMenuItem
					onClick={() => setTheme("system")}
					className={theme === "system" ? "bg-muted font-medium" : ""}
				>
					<SunMoon className='mr-2 h-5 w-5' />
					<span className='flex-1'>System</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
