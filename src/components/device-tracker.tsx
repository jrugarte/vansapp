"use client";
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Asegúrate de reemplazar esto con tu token de Mapbox
mapboxgl.accessToken = "tu_token_de_mapbox_aqui";

interface Device {
  id: string;
  location: [number, number];
  eta: Date;
}

export default function DeviceTracker() {
  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    if (map.current) return; // El mapa ya está inicializado

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40], // Coordenadas iniciales (ajusta según tus necesidades)
      zoom: 9,
    });

    // Simular la obtención de datos de dispositivos en tiempo real
    const interval = setInterval(() => {
      // Aquí deberías obtener los datos reales de tus dispositivos
      const updatedDevices: Device[] = [
        {
          id: "1",
          location: [-74.5, 40],
          eta: new Date(Date.now() + 1000 * 60 * 30),
        },
        {
          id: "2",
          location: [-74.6, 40.1],
          eta: new Date(Date.now() + 1000 * 60 * 45),
        },
      ];
      setDevices(updatedDevices);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!map.current) return;

    // Actualizar marcadores en el mapa
    devices.forEach((device) => {
      const el = document.createElement("div");
      el.className = "marker";
      el.style.backgroundImage = "url(https://placekitten.com/g/40/40)";
      el.style.width = "20px";
      el.style.height = "20px";
      el.style.borderRadius = "50%";

      new mapboxgl.Marker(el)
        .setLngLat(device.location)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h3>Dispositivo ${
              device.id
            }</h3><p>ETA: ${device.eta.toLocaleTimeString()}</p>`
          )
        )
        .addTo(map.current!);

      // Verificar si el dispositivo está cerca del destino
      if (isNearDestination(device.location)) {
        sendPushNotification(device.id);
      }
    });
  }, [devices]);

  const isNearDestination = (location: [number, number]) => {
    // Implementa la lógica para determinar si el dispositivo está cerca del destino
    // Por ejemplo, puedes calcular la distancia entre la ubicación actual y el destino
    return false; // Cambia esto con tu lógica real
  };

  const sendPushNotification = (deviceId: string) => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification(`El dispositivo ${deviceId} está cerca del destino!`);
    } else if (
      "Notification" in window &&
      Notification.permission !== "denied"
    ) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(
            `El dispositivo ${deviceId} está cerca del destino!`
          );
        }
      });
    }
  };

  return (
    <div className="h-full w-full">
      <div ref={mapContainer} className=" border-red-600 h-full w-full" />
      <div className="absolute top-0 right-0 m-4 p-4 bg-white rounded shadow">
        <h2 className="text-lg font-bold mb-2">Dispositivos</h2>
        {devices.map((device) => (
          <div key={device.id} className="mb-2">
            <p>Dispositivo {device.id}</p>
            <p>ETA: {device.eta.toLocaleTimeString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
