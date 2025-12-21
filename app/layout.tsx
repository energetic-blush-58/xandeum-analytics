export const metadata = {
  title: 'Xandeum Analytics',
  description: 'Real-time pNode analytics engine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
