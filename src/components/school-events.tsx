import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export default function SchoolEvents() {
  return (
    <Card className="bg-gray-900 border-gray-800 text-emerald-100 w-screen mx-4 md:w-1/2">
      <CardHeader>
        <CardTitle>Notificaciones</CardTitle>
      </CardHeader>
      <CardContent>
        <span className="text-lg">Eventos Escolares</span>
        <div className="flex items-center space-x-2">
          <Calendar className="h-5 w-5" />
          <span>No hay eventos próximos</span>
        </div>
      </CardContent>
    </Card>
  );
}
