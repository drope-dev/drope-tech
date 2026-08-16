import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pedro Fernandes — Senior Backend Engineer",
  description: "Senior Software Engineer with 8+ years building high-performance backend systems. Java, Go, Node.js, React, AWS.",
  keywords: ["backend engineer", "java", "golang", "spring boot", "microservices", "freelance", "São Paulo"],
  authors: [{ name: "Pedro Fernandes", url: "https://drope.dev" }],
  openGraph: {
    title: "Pedro Fernandes — Senior Backend Engineer",
    description: "Available for freelance projects. Java · Go · Node.js · React · AWS.",
    url: "https://drope.dev",
    siteName: "drope.dev",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Pedro Fernandes — Senior Backend Engineer",
    description: "Available for freelance projects. Java · Go · Node.js · React · AWS.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
