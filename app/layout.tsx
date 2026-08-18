import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Haitamim Jahran Mahendra | AI Engineer",
  description: "Portofolio AI Engineer dan Software Developer Haitamim Jahran Mahendra.",
};

/** Defines document metadata and the Indonesian page shell. */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
