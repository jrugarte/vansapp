import HomeView from "@/components/homeview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Bus Tracker",
  description: "Track your child's school bus in real-time",
};

export default function Home() {
  return <HomeView />;
}
