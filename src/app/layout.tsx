import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "musabagriyanik.github.io",
  description: "Hi.",
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
