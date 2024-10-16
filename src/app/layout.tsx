"use client";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@mui/material";
import { MapPin, Clock, User, HomeIcon } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

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

                <footer className="row-start-3 flex bg-slate-700 gap-6 flex-wrap fixed w-full bottom-0 items-center justify-around">
                  <Link href="/" passHref>
                    <Button
                      className={`p-4 ${pathname === "/" ? "bg-gray-700" : ""}`}
                    >
                      <HomeIcon className="h-6 w-6" />
                    </Button>
                  </Link>
                  <Link href="/device-tracker" passHref>
                    <Button
                      className={`p-4 ${
                        pathname === "/device-tracker" ? "bg-gray-700" : ""
                      }`}
                    >
                      <MapPin className="h-6 w-6" />
                    </Button>
                  </Link>
                  <Link href="/user-info" passHref>
                    <Button
                      className={`p-4 ${
                        pathname === "/user-info" ? "bg-gray-700" : ""
                      }`}
                    >
                      <User className="h-6 w-6" />
                    </Button>
                  </Link>
                  <Link href="/schedule" passHref>
                    <Button
                      className={`p-4 ${
                        pathname === "/schedule" ? "bg-gray-700" : ""
                      }`}
                    >
                      <Clock className="h-6 w-6" />
                    </Button>
                  </Link>
                </footer>
              </div>
            </main>
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}
// import "./globals.css";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "School Bus Tracker",
//   description: "Track your child's school bus in real-time",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="dark">
//       <body className={`${inter.className} bg-black text-white`}>
//         <header>VansApp</header>
//         {children}
//         <Toaster />
//       </body>
//     </html>
//   );
// }
