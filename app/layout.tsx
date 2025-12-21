import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xandeum.OS Analytics",
  description: "High-performance pNode analytics engine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
