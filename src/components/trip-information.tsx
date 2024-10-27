import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function TripInformation() {
  return (
    <Card className="bg-gray-900 border-gray-800 text-emerald-100 w-full">
      <CardHeader>
        <CardTitle>Información de viaje</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 my-4">
          <Clock className="h-5 w-5" />
          <span>ETA: 15:45</span>
        </div>
        <Link href={"/device-tracker"}>
          <Button
            variant="outline"
            className="w-full bg-transparent text-white border-white hover:bg-gray-800"
          >
            <MapPin className="mr-2 h-4 w-4" /> Ver Mapa
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
