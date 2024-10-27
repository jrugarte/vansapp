"use client";
import WeeklyAttendance from "./weekly-attendance";
import TripInformation from "./trip-information";
import Notifications from "./notifications";
import SchoolEvents from "./school-events";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import SkeletonHome from "./skeleton-home";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut, RefreshCw } from "lucide-react";

export default function Home() {
  const session = useSession();
  const [username, setUsername] = useState<string | null>(null);
  const [isLoginOut, setIsLoginOut] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated" && session.data?.user?.name) {
      setUsername(session.data.user.name);
    }
  }, [session]);

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/sign-in");
    setTimeout(() => {
      setIsLoginOut(false);
    }, 2000);
  };

  if (session.status === "loading") {
    return <SkeletonHome />;
  }

  return (
    <main>
      <header className="bg-green-500 z-10 p-2 text-primary-foreground border-b fixed top-0 w-full flex justify-between items-center">
        <h1 className="p-4 text-2xl font-bold">Hola {username}</h1>
        <Button
          variant="outline"
          size="sm"
          onClick={handleLogout}
          className="bg-white text-green-500 hover:bg-green-100"
          disabled={isLoginOut}
        >
          {!isLoginOut ? (
            <div className="flex ">
              <LogOut className="mr-2 h-4 w-4" /> Cerrar Sesión
            </div>
          ) : (
            <div>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Saliendo...
            </div>
          )}
        </Button>
      </header>
      <div className="h-full my-24 z-20 flex flex-col items-center max-w-3/4 gap-4 mx-4">
        <WeeklyAttendance />
        <TripInformation />
        <Notifications />
        <SchoolEvents />
      </div>
    </main>
  );
}
