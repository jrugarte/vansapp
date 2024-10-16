import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Send } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card className="bg-gray-900 border-gray-800 text-emerald-100 w-screen mx-4 md:w-1/2">
      <CardHeader>
        <CardTitle>Notificaciones</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-start gap-4 mt-4">
          <div className="flex space-x-2 items-center">
            <Bell className="h-5 w-5" />
            <span>Sin mensajes</span>
          </div>
          <Link href={"/sign-in"}>
            <Button
              variant="outline"
              className=" bg-transparent text-white border-white hover:bg-gray-800 space-x-2 w-full"
            >
              <Send className="mr-2 h-4 w-4" />
              Enviar mensaje al chofer
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
