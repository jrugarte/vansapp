"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Trash2, RefreshCw } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const weekdays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

type Child = {
  id: string;
  name: string;
};

type AttendanceData = {
  [childId: string]: {
    morning: string[];
    afternoon: string[];
  };
};

const children: Child[] = [
  { id: "1", name: "Juan" },
  { id: "2", name: "María" },
];

// Mock function to simulate syncing with a backend
const syncWithBackend = async (data: AttendanceData) => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Synced with backend:", data);
  return true;
};

export default function WeeklyAttendance() {
  const [selectedChild, setSelectedChild] = useState<string>(children[0].id);
  const [attendanceData, setAttendanceData] = useState<AttendanceData>({});
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    const loadAttendanceData = () => {
      try {
        const savedData = localStorage.getItem("attendanceData");
        if (savedData) {
          setAttendanceData(JSON.parse(savedData));
        }
      } catch (error) {
        console.error("Error loading data from localStorage:", error);
        toast({
          title: "Error",
          description: "No se pudieron cargar los datos de asistencia.",
          variant: "destructive",
        });
      }
    };

    loadAttendanceData();
  }, []);

  const saveAttendanceData = () => {
    try {
      localStorage.setItem("attendanceData", JSON.stringify(attendanceData));
    } catch (error) {
      console.error("Error saving data to localStorage:", error);
      toast({
        title: "Error",
        description: "No se pudieron guardar los datos de asistencia.",
        variant: "destructive",
      });
    }
  };

  const toggleDay = (day: string, period: "morning" | "afternoon") => {
    setAttendanceData((prev) => {
      const childData = prev[selectedChild] || { morning: [], afternoon: [] };
      const updatedPeriod = childData[period].includes(day)
        ? childData[period].filter((d) => d !== day)
        : [...childData[period], day];

      return {
        ...prev,
        [selectedChild]: {
          ...childData,
          [period]: updatedPeriod,
        },
      };
    });
  };

  const clearAllSelections = () => {
    setAttendanceData((prev) => ({
      ...prev,
      [selectedChild]: { morning: [], afternoon: [] },
    }));
    toast({
      title: "Éxito",
      description:
        "Se han borrado todas las selecciones para el niño seleccionado.",
    });
  };

  const handleSync = async () => {
    setIsSyncing(true);
    try {
      const success = await syncWithBackend(attendanceData);
      if (success) {
        toast({
          title: "Éxito",
          description: "Los datos se han sincronizado correctamente.",
        });
        saveAttendanceData();
      }
    } catch (error) {
      console.error("Error syncing with backend:", error);
      toast({
        title: "Error",
        description: "No se pudieron sincronizar los datos con el servidor.",
        variant: "destructive",
      });
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <Card className="bg-gray-900 border-gray-800 text-emerald-100 w-screen mx-4 md:w-1/2">
      <CardHeader>
        <CardTitle className="text-lg">Asistencia semanal</CardTitle>
      </CardHeader>
      <CardContent>
        <Select value={selectedChild} onValueChange={setSelectedChild}>
          <SelectTrigger className="w-full mb-4">
            <SelectValue placeholder="Selecciona un niño" />
          </SelectTrigger>
          <SelectContent>
            {children.map((child) => (
              <SelectItem key={child.id} value={child.id}>
                {child.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="mb-4">
          <div className="grid grid-cols-6 gap-2 mb-2">
            <div></div>
            {weekdays.map((day) => (
              <div key={day} className="text-center text-sm">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-6 gap-2 mb-2">
            <div className="flex items-center">Mañana</div>
            {weekdays.map((day) => (
              <div key={`morning-${day}`} className="flex justify-center">
                <Checkbox
                  id={`morning-${day}`}
                  checked={
                    attendanceData[selectedChild]?.morning.includes(day) ||
                    false
                  }
                  onCheckedChange={() => toggleDay(day, "morning")}
                  className="border-white data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-6 gap-2">
            <div className="flex items-center">Tarde</div>
            {weekdays.map((day) => (
              <div key={`afternoon-${day}`} className="flex justify-center">
                <Checkbox
                  id={`afternoon-${day}`}
                  checked={
                    attendanceData[selectedChild]?.afternoon.includes(day) ||
                    false
                  }
                  onCheckedChange={() => toggleDay(day, "afternoon")}
                  className="border-white data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={clearAllSelections}
            className="bg-transparent text-white border-white hover:bg-gray-800"
          >
            <Trash2 className="mr-2 h-4 w-4" /> Borrar todo
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleSync}
            disabled={isSyncing}
            className="bg-transparent text-white border-white hover:bg-gray-800"
          >
            <RefreshCw
              className={`mr-2 h-4 w-4 ${isSyncing ? "animate-spin" : ""}`}
            />
            {isSyncing ? "Sincronizando..." : "Sincronizar"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
