import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from '../components/theme-provider';
import { CrispProvider } from "@/components/crisp-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AiDora", //changes the name of at the title bar for the browser
  description: "Welcome to the beta version of AiDora, where the future of creativity begins! 🚀",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <CrispProvider />
        <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
          </ThemeProvider> </body>
      </html>
    </ClerkProvider>
  );
}
