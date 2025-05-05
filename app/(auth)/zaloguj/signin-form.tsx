"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInDefaultValues } from "@/lib/constants";
import { SignInUser } from "@/lib/actions/user.actions";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

const SignInForm = () => {
	const [data, action] = useActionState(SignInUser, {
		success: false,
		message: "",
	});

	const SignInButton = () => {
		const { pending } = useFormStatus();
		return (
			<Button type='submit' className='w-full' disabled={pending}>
				{pending ? "Ładowanie..." : "Zaloguj"}
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

				<div>
					{" "}
					<SignInButton />
				</div>

				{data && !data.success && (
					<p className='text-destructive text-center'>{data.message}</p>
				)}

				<div className='text-sm text-center text-muted-foreground'>
					<p>
						Nie masz konta?{" "}
						<a href='/rejestracja' target='_self' className='text-primary'>
							Zarejestruj się
						</a>
					</p>
				</div>
			</div>
		</form>
	);
};

export default SignInForm;
