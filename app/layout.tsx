import type { Metadata } from "next";
import { Poppins, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider, SignedOut } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "100"
});

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "Duno",
  description: "Your AI Business Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en"><body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>{children}</body>
  </html>
  </ClerkProvider>
    
    
  );
}
