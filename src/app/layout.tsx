import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RajeshOS | Developer Operating System",
  description: "A premium developer portfolio showcasing system thinking, AI reasoning, and modular software engineering.",
  openGraph: {
    title: "RajeshOS | Developer Operating System",
    description: "A premium developer portfolio showcasing system thinking, AI reasoning, and modular software engineering.",
    url: "https://rajeshos.com",
    siteName: "RajeshOS",
    images: [
      {
        url: "/rajesh-portfolio/profile.png",
        width: 800,
        height: 600,
        alt: "RajeshOS Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RajeshOS | Developer Operating System",
    description: "A premium developer portfolio showcasing system thinking, AI reasoning, and modular software engineering.",
    images: ["/rajesh-portfolio/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}

