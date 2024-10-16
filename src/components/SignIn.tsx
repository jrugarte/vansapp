"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid username or password");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center mb-4">
            Iniciá sesión en
            <p className="text-slate-300">VansApp</p>
          </CardTitle>
          <CardDescription>
            Ingresá tus credenciales para acceder a tu cuenta
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Usuario</Label>
                <Input
                  id="username"
                  placeholder="pepegrillo@gmail.com"
                  value={username}
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="************"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={handleSubmit} className="w-full">
            Iniciar Sesión
          </Button>
        </CardFooter>
        <p className="text-center text-sm text-gray-700 mb-4">
          No tenés una cuenta?{" "}
          <Link href="/sign-up" className="text-primary hover:underline">
            Registrate
          </Link>
        </p>
      </Card>
    </div>
  );
}

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Link from "next/link";

// export default function SignIn() {
//   return (
{
  /* <div className="flex flex-col items-center justify-center min-h-screen">
  <CardTitle className="md:text-8xl mb-8 animate-bounce text-6xl">
    Bienvenido
  </CardTitle>
  <Card className="w-full max-w-md animate-fade-in">
    <CardHeader className="space-y-1">
      <CardTitle className="text-3xl font-bold text-center">
        Iniciar sesión en
        <p className="text-slate-300">VansApp</p>
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <form className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-700"
          >
            Email o teléfono
          </label>
          <Input
            id="email"
            type={"email" || "phone"}
            placeholder="Ingresar email ó teléfono"
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Contraseña
          </label>
          <Input
            id="password"
            type="password"
            placeholder="********"
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <Button className="w-full bg-slate-300 hover:bg-slate-300/70">
          Ingresar
        </Button>
      </form>
      <p className="text-center text-sm text-gray-700">
        No tenés una cuenta?{" "}
        <Link href="/sign-up" className="text-primary hover:underline">
          Registrate
        </Link>
      </p>
    </CardContent>
  </Card>
</div> */
}
//   );
// }
