import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramen. | Ramendra Kumar",
  description: "Ramendra Kumar — writer, storyteller and speaker.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
