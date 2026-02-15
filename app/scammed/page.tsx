const Page = () => {
	return (
		<div className="flex w-full h-full items-center justify-center">
			<div className="flex flex-col items-center bg-gray-200 w-full mx-[10px] sm:w-[400px] mx-0 rounded-2xl border-2 border-red-400 shadow-lg py-[10px] px-[10px] gap-6">
				<h1 className="text-2xl text-center font-semibold text-red-600">
					You Just Fell For a Quishing Scam
				</h1>
				<p className="text-center">
					Quishing is a form of phishing related to QR codes. Be careful
					scanning QR codes, even if it looks legit.
				</p>
				<p className="text-center">
					Information entered on this website is{" "}
					<b>not stored or sent anywhere</b>! This is a dummy website designed
					to inform the public and stop scammers!{" "}
					<a
						className="font-semibold text-blue-700"
						href="https://github.com/JackMechem/vending-machine-scam"
					>
						View this website&apos;s source code here
					</a>
					.
				</p>
				<a
					className="w-full text-center font-semibold cursor-pointer py-[10px] rounded-lg bg-red-600 border-2 hover:border-red-700 border-transparent hover:brightness-110 text-slate-100 shadow-sm"
					href="https://www.cloudflare.com/learning/security/what-is-quishing/"
				>
					Learn More About Quishing
				</a>
			</div>
		</div>
	);
};

export default Page;
