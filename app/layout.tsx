export const metadata = {
  title: "Xandeum.OS Analytics",
  description: "High-performance pNode analytics engine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
