"use client";

import { useState, ChangeEvent } from "react";

interface CardNumberFieldProps {
	className: string;
}

const CardNumberField = ({ className }: CardNumberFieldProps) => {
	const [cardNumber, setCardNumber] = useState<string>("");

	const handleCardChange = (e: ChangeEvent<HTMLInputElement>) => {
		const rawValue = e.target.value.replace(/\D/g, "");
		const truncated = rawValue.slice(0, 16);
		const formatted = truncated.replace(/(\d{4})(?=\d)/g, "$1 ");
		setCardNumber(formatted);
	};

	return (
		<input
			type="text"
			placeholder="Card Number"
			className={className}
			value={cardNumber}
			onChange={handleCardChange}
			inputMode="numeric"
			autoComplete="cc-number"
		/>
	);
};

export default CardNumberField;
