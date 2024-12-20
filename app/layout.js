import { Geist, Geist_Mono, Monoton } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const monoton = Monoton({
  variable: "--font-monoton",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
	title: "Game-changer: How do the major sports events influence YouTube engagement?",
	description: "Created by Robodatapioneers2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${monoton.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
