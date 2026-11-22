import type { Metadata, Viewport } from "next";
import { DM_Sans, Great_Vibes, Playfair_Display } from "next/font/google";
import "./globals.css";

const serif = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-serif",
	display: "swap",
});
const sans = DM_Sans({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
});
const script = Great_Vibes({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-script",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Happy Birthday Sayangku❤️🎂",
	description: "A Little Universe Made Just For You",
	icons: {
		icon: [
			{ url: "/favicon/favicon.svg", type: "image/svg+xml" },
			{
				url: "/favicon/favicon-96x96.png",
				sizes: "96x96",
				type: "image/png",
			},
		],
		shortcut: "/favicon/favicon.ico",
		apple: "/favicon/apple-touch-icon.png",
	},
	manifest: "/favicon/site.webmanifest",
};
export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	viewportFit: "cover",
	themeColor: "#17131A",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="id"
			className={`${serif.variable} ${sans.variable} ${script.variable}`}
		>
			<body className="lock" suppressHydrationWarning>
				{children}
			</body>
		</html>
	);
}
