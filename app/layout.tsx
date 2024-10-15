import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MathPhysInfo Portal",
  description: "EDV-HUB der Fachschaft MathPhysInfo Heidelberg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={inter.className}>
          <ThemeProvider attribute='class' defaultTheme={'dark'}>
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
