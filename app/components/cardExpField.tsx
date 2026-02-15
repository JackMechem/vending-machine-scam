"use client";

import { useState, ChangeEvent, InputHTMLAttributes } from "react";

interface CardExpFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	className: string;
}

const CardExpField = ({ className, ...props }: CardExpFieldProps) => {
	const [expiry, setExpiry] = useState<string>("");

	const handleExpiryChange = (e: ChangeEvent<HTMLInputElement>) => {
		let input = e.target.value.replace(/\D/g, "");

		input = input.substring(0, 4);

		if (input.length > 2) {
			input = `${input.substring(0, 2)} / ${input.substring(2)}`;
		}

		setExpiry(input);

		if (props.onChange) {
			props.onChange(e);
		}
	};

	return (
		<input
			{...props}
			type="text"
			placeholder="MM / YY"
			className={className}
			value={expiry}
			onChange={handleExpiryChange}
			inputMode="numeric"
			autoComplete="cc-exp"
		/>
	);
};

export default CardExpField;
