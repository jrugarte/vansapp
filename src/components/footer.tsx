// Loader.js
import React from "react";
// import "./Loader.css"; // Si deseas agregar estilos adicionales
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "@mui/material";
import { usePathname } from "next/navigation";
import { Clock, HomeIcon, MapPin, User } from "lucide-react";

const Footer = () => {
  const pathname = usePathname();
  const session = useSession();

  return (
    <div className="loader-container">
      {session.status !== "authenticated" ? (
        <div></div>
      ) : (
        <footer className="row-start-3 flex bg-slate-700 gap-6 flex-wrap fixed w-full bottom-0 items-center justify-around">
          <Link href="/" passHref>
            <Button className={`p-4 ${pathname === "/" ? "bg-gray-700" : ""}`}>
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
              className={`p-4 ${pathname === "/schedule" ? "bg-gray-700" : ""}`}
            >
              <Clock className="h-6 w-6" />
            </Button>
          </Link>
        </footer>
      )}
    </div>
  );
};

export default Footer;
