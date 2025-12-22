import "./globals.css";
import React from "react";

export const metadata = {
  title: 'Xandeum Analytics',
  description: 'Real-time pNode analytics engine',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: 'black', color: 'white', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
