"use client";

import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/footer";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
// export const metadata: Metadata = {
//   title: "School Bus Tracker",
//   description: "Track your child's school bus in real-time",
// };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <html lang="en" className="dark">
        <body className={`${inter.className} bg-black text-white`}>
          <div className="font-[family-name:var(--font-geist-sans)] h-svh">
            <main className="flex flex-col items-center sm:items-start h-screen">
              <div className="h-screen w-full">
                <main className="flex-1 overflow-auto h-fit space-y-4 mb-12">
                  <div className="flex-1 overflow-y-auto">{children}</div>
                  <Toaster />
                </main>

                <Footer />
              </div>
            </main>
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}
