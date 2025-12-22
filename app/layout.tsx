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
      <head>
        <style>{`
          body { 
            background-color: black !important; 
            color: white !important; 
            margin: 0; 
            font-family: sans-serif; 
          }
          .glass-panel {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 1rem;
            border-radius: 8px;
          }
        `}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
