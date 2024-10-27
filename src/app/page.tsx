"use client";
import HomeView from "@/components/homeview";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "School Bus Tracker",
//   description: "Track your child's school bus in real-time",
// };
import { useSession } from "next-auth/react";
import AuthOverlay from "@/components/AuthOverlay";
import Loader from "@/components/loader";

export default function Home() {
  const { status } = useSession();

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "unauthenticated") {
    return (
      <AuthOverlay>
        <HomeView />
      </AuthOverlay>
    );
  }

  return <HomeView />;
}
