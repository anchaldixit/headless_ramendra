import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Ramendra Kumar | Writer, Storyteller & Speaker",
    template: "%s | Ramendra Kumar",
  },

  description:
    "Official website of Ramendra Kumar — writer, storyteller and speaker.",

  metadataBase: new URL("https://steelblue-armadillo-647332.hostingersite.com"),

  openGraph: {
    type: "website",
    siteName: "Ramendra Kumar",
    title: "Ramendra Kumar | Writer, Storyteller & Speaker",
    description:
      "Official website of Ramendra Kumar — writer, storyteller and speaker.",
    images: [
      {
        url: "/Ramender.jpg",
        width: 1200,
        height: 630,
        alt: "Ramendra Kumar",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ramendra Kumar | Writer, Storyteller & Speaker",
    description:
      "Official website of Ramendra Kumar — writer, storyteller and speaker.",
    images: ["/Ramender.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
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