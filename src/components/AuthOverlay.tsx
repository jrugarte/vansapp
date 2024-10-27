import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

interface AuthOverlayProps {
  children: React.ReactNode;
}

export default function AuthOverlay({ children }: AuthOverlayProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/sign-in");
    }, 1500);
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 filter blur-sm">{children}</div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-center">
              ¡Necesitas iniciar sesión!
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4">Iniciá sesión para acceder a esta página.</p>
            <Button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Redirigiendo...
                </>
              ) : (
                "Iniciar sesión"
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
