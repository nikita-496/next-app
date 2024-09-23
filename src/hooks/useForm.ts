import { SyntheticEvent, useEffect, useState } from "react";

type RegisterOptions = {
	pattern?: RegExp;
	required?: boolean;
	errorMessage?: string;
};

type FormState = {
	error: string;
};

export const useForm = () => {
	const [error, setError] = useState("");

	useEffect(() => {
		(document.querySelector("[name='email']") as HTMLInputElement).value;
	}, []);

	const handleSubmit = (
		e: React.FormEvent<HTMLFormElement>,
		onSubmit?: () => void
	) => {
		e.preventDefault();
		if (onSubmit) {
			onSubmit();
		}
	};

	const register = (name: string, registerOptions?: RegisterOptions) => ({
		name,
		required: registerOptions?.required,
		onChange: (e: SyntheticEvent) => {
			const target = e.target as typeof e.target & {
				value: string;
			};
			setError(
				new RegExp(registerOptions?.pattern || "").test(target.value)
					? ""
					: registerOptions?.errorMessage || "Невалидное поле"
			);
		},
	});

	const formState: FormState = {
		error,
	};

	return {
		handleSubmit,
		register,
		formState,
	};
};
