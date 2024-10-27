"use client";
import SignIn from "@/components/SignIn";
import Loader from "@/components/loader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignInPage() {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/");
    }
  }, [session, router]);

  if (session.status === "loading") {
    return <Loader />;
  }

  return <SignIn />;
}
