import type { Metadata } from "next";
import LenisProvider from "@/components/LenisProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pedro Fernandes",
  description:
    "Senior Software Engineer with 8+ years building high-performance backend systems.",
  authors: [{ name: "Pedro Fernandes", url: "https://drope.dev" }],
  openGraph: {
    title: "Pedro Fernandes",
    description:
      "Senior Software Engineer with 8+ years building high-performance backend systems.",
    url: "https://drope.dev",
    siteName: "drope.dev",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Pedro Fernandes",
    description:
      "Senior Software Engineer with 8+ years building high-performance backend systems.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
