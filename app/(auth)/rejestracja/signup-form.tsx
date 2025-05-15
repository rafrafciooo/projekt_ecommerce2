"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUpDefaultValues } from "@/lib/constants";

import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import { SignUpUser } from "@/lib/actions/user.actions";

import { useActionState } from "react";

const SignUpForm = () => {
	const [data, action] = useActionState(SignUpUser, {
		success: false,
		message: "",
	});

	const SignUpButton = () => {
		const { pending } = useFormStatus();
		return (
			<Button type='submit' className='w-full' disabled={pending}>
				{pending ? "Ładowanie..." : "Zarejestruj sie"}
				{pending && <Loader2 className='animate-spin' />}
			</Button>
		);
	};
	return (
		<form action={action}>
			<div className='space-y-2'>
				<Label htmlFor='email'>Email</Label>
				<Input
					id='email'
					name='email'
					type='email'
					required
					placeholder='Wprowadź swój email'
					autoComplete='email'
					defaultValue={signUpDefaultValues.email}
				/>

				<Label htmlFor='password'>Hasło</Label>
				<Input
					id='password'
					name='password'
					type='password'
					required
					placeholder='Wprowadź swoje hasło'
					autoComplete='password'
					defaultValue={signUpDefaultValues.password}
				/>
				<Label htmlFor='confirmPassword'>Powtórz hasło</Label>
				<Input
					id='confirmPassword'
					name='confirmPassword'
					type='password'
					required
					placeholder='powtórz hasło'
					autoComplete='confirmPassword'
					defaultValue={signUpDefaultValues.password}
				/>

				<div>
					{" "}
					<SignUpButton />
				</div>

				{data && !data.success && (
					<p className='text-destructive text-center'>{data.message}</p>
				)}

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
