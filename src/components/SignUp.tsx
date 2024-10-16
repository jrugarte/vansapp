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

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (res.ok) {
        // Sign in the user after successful registration
        const result = await signIn("credentials", {
          username,
          password,
          redirect: false,
        });

        if (result?.error) {
          setError("Error signing in after registration");
        } else {
          router.push("/");
        }
      } else {
        const data = await res.json();
        setError(data.message || "Error creating account");
      }
    } catch (error) {
      setError("An unexpected error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Create a new account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.push("/signin")}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Sign Up</Button>
        </CardFooter>
      </Card>
    </div>
  );
} // import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Link from "next/link";

// export default function SignIn() {
//   return (
//     <div className="flex items-center justify-center min-h-screen ">
//       <Card className="w-full max-w-md animate-fade-in">
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-3xl font-bold text-center">
//             Registrate en
//             <p className="text-slate-300">VansApp</p>
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <form className="space-y-4">
//             <div className="space-y-2">
//               <label
//                 htmlFor="name"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 Nombre
//               </label>
//               <Input
//                 id="name"
//                 type="name"
//                 placeholder="Ingresá tu nombre"
//                 required
//                 className="w-full px-3 py-2 border rounded-md"
//               />
//             </div>
//             <div className="space-y-2">
//               <label
//                 htmlFor="email"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 Email
//               </label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="Ingresá tu email"
//                 required
//                 className="w-full px-3 py-2 border rounded-md"
//               />
//             </div>
//             <div className="space-y-2">
//               <label
//                 htmlFor="password"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 Contraseña
//               </label>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="Ingresá una contraseña"
//                 required
//                 className="w-full px-3 py-2 border rounded-md"
//               />
//             </div>
//             <Button
//               onClick={() => {}}
//               className="w-full bg-slate-300 hover:bg-slate-300/70"
//             >
//               Crear cuenta
//             </Button>
//           </form>
//           <p className="text-center text-sm text-gray-700">
//             Ya estás registrado?{" "}
//             <Link href="/sign-in" className="text-primary hover:underline">
//               Iniciar Sesión
//             </Link>
//           </p>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
