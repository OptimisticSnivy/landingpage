import "./globals.css";
import Nav from "@/components/ui/navbar";
import { regularIosevka } from "./fonts"
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Anand Mahamuni",
	description: "Landing Page of Anand Mahamuni",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${regularIosevka.className} antialiased`}
			>
				<Nav></Nav>
				{children}
			</body>
		</html>
	);
}
