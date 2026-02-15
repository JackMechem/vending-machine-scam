"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";
import CardNumberField from "./components/cardNumberField";
import CardExpField from "./components/cardExpField";
import ApplePayButton from "./components/applePayButton";
import Link from "next/link";

const Home = () => {
	const [ccv, setCcv] = useState("");

	const handleCCVChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const onlyNums = value.replace(/[^0-9]/g, "");
		setCcv(onlyNums);
	};

	return (
		<div className="h-full w-full flex items-center justify-center">
			<div className="flex flex-col items-center bg-gray-200 w-full mx-[10px] sm:w-[400px] mx-0 rounded-2xl border border-slate-200 shadow-lg py-[10px] px-[10px] gap-[10px]">
				<Image
					width={400}
					height={400}
					alt={"CSUN Logo"}
					src={
						"https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/CSUNS.svg/1280px-CSUNS.svg.png"
					}
					className="sm:w-[30%] w-[100px] mt-4"
				/>
				<h3 className="text-2xl text-center font-semibold text-slate-700 mb-4">
					Jacaranda Hall Vending Machine 1
				</h3>
				<h2 className="text-4xl text-green-600 font-semibold mb-[20px] bg-slate-100 px-[20px] py-[10px] rounded-full">
					$3.00
				</h2>
				<input
					placeholder="Name on Card"
					className="w-full bg-slate-100 px-[15px] py-[6px] rounded-lg border-[2px] border-transparent focus:border-slate-400 focus:outline-none"
				/>
				<CardNumberField className="w-full bg-slate-100 px-[15px] py-[6px] rounded-lg border-[2px] border-transparent focus:border-slate-400 focus:outline-none" />
				<div className="flex gap-[10px]">
					<input
						placeholder="CCV"
						className="w-full bg-slate-100 px-[15px] py-[6px] rounded-lg border-[2px] border-transparent focus:border-slate-400 focus:outline-none"
						maxLength={3}
						inputMode="numeric"
						pattern="[0-9]*"
						value={ccv}
						onChange={handleCCVChange}
					/>
					<CardExpField className="w-full bg-slate-100 px-[15px] py-[6px] rounded-lg border-[2px] border-transparent focus:border-slate-400 focus:outline-none" />
				</div>
				<Link
					className="w-full text-center font-semibold cursor-pointer py-[10px] rounded-lg bg-slate-600 border-2 hover:border-slate-500 border-transparent hover:brightness-110 text-slate-100 shadow-sm"
					href="/scammed"
				>
					Pay With Card
				</Link>
				<ApplePayButton />
			</div>
		</div>
	);
};

export default Home;
