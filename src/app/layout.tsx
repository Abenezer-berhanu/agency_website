import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/UiComponents/NavBar";
import Footer from "@/components/UiComponents/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agency Website",
  description: "Generated by Abenu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative flex flex-col font-sans antialiased min-h-screen`}
        suppressHydrationWarning={true}
      >
        <div>
          <NavBar />
        </div>
        <main>{children}</main>
        <div className="mt-auto border">
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
