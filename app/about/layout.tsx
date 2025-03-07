import type { Metadata } from "next";
import { Figtree, Geist_Mono } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "About us",
  description: "Meet our team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.className} antialiased`}
      >
          {children}
      </body>
    </html>
  );
}
