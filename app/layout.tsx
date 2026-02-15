import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Jacaranda Hall Vending Machine 1 - Payment",
	description: "Online vending machine payment",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-full">
			<body className={`${inter.className} antialiased h-full`}>
				{children}
			</body>
		</html>
	);
}
