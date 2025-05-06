"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInDefaultValues } from "@/lib/constants";

import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

const SignUpForm = () => {


	const SignUpButton = () => {
		const { pending } = useFormStatus();
		return (
			<Button type='submit' className='w-full' disabled={pending}>
				{pending ? "Ładowanie..." : "Zaloguj"}
				{pending && <Loader2 className='animate-spin' />}
			</Button>
		);
	};
	return (
		<form>
			<div className='space-y-2'>
				<Label htmlFor='email'>Email</Label>
				<Input
					id='email'
					name='email'
					type='email'
					required
					placeholder='Wprowadź swój email'
					autoComplete='email'
					defaultValue={signInDefaultValues.email}
				/>

				<Label htmlFor='password'>Hasło</Label>
				<Input
					id='password'
					name='password'
					type='password'
					required
					placeholder='Wprowadź swoje hasło'
					autoComplete='password'
					defaultValue={signInDefaultValues.password}
				/>
				<Label htmlFor='password'>Powtórz hasło</Label>
				<Input
					id='password'
					name='password'
					type='password'
					required
					placeholder='powtórz hasło'
					autoComplete='new-password'
					defaultValue={signInDefaultValues.password}
				/>

				<div>
					{" "}
					<SignUpButton />
				</div>

				

				<div className='text-sm text-center text-muted-foreground'>
					<p>
						Masz konto?{" "}
						<a href='/zaloguj' target='_self' className='text-primary'>
							Zaloguj się
						</a>
					</p>
				</div>
			</div>
		</form>
	);
};

export default SignUpForm;
