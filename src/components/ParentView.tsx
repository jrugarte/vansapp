// "use client";

// import { useState } from "react";
// import { Card, CardContent, CardHeader, Button } from "@mui/material";
// import { MapPin, Clock, Home, User } from "lucide-react";
// import Link from "next/link";
// import DeviceTracker from "./device-tracker";

// export default function ParentView() {
//   const [activeTab, setActiveTab] = useState("map");
//   const [date, setDate] = useState<Date>(new Date());
//   // const MapView = () => (
//   //   <div className="h-full flex items-center justify-center">
//   //     {/* <DeviceTracker />{" "} */}
//   //   </div>
//   // );
//   const HomeView = () => (
//     <div className="h-full flex flex-col items-center">
//       <Card className="bg-inherit border text-emerald-800 dark:text-emerald-50">
//         <CardHeader>
//           <title>Calendar</title>
//         </CardHeader>
//         <CardContent>
//           <div className="text-center">
//             <p>{date.toDateString()}</p>
//             <Button onClick={() => setDate(new Date())}>Today</Button>
//           </div>
//         </CardContent>
//       </Card>
//       <br />
//       <Card className="bg-inherit border text-emerald-800 dark:text-emerald-50">
//         <CardHeader>
//           <title>Trip Information</title>
//         </CardHeader>
//         <CardContent className="space-y-2">
//           <div className="flex items-center space-x-2">
//             <Clock className="h-5 w-5 text-muted-foreground" />
//             <span>ETA: 15:45</span>
//           </div>
//           <div className="h-40 bg-muted rounded-md flex items-center justify-center">
//             <MapPin className="h-8 w-8 text-primary" />
//             <span className="ml-2">Map View</span>
//           </div>
//         </CardContent>
//       </Card>
//       <br />
//       <Card className="bg-inherit border text-emerald-800 dark:text-emerald-50">
//         <CardHeader>
//           <title>Messages</title>
//         </CardHeader>
//         <CardContent>
//           <p className="text-muted-foreground">No new messages</p>
//         </CardContent>
//       </Card>{" "}
//     </div>
//   );
//   const UserInfo = () => (
//     <div className="h-full p-4 overflow-y-auto">
//       <h2 className="text-xl font-semibold mb-4">User Information</h2>
//       <div className="space-y-4">
//         <div>
//           <h3 className="font-medium">Children</h3>
//           <ul className="list-disc list-inside">
//             <li>John (10 years old) - Springfield Elementary</li>
//             <li>Sarah (8 years old) - Springfield Elementary</li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="font-medium">School Information</h3>
//           <p>Springfield Elementary School</p>
//           <p>123 School St, Springfield, ST 12345</p>
//           <p>Phone: (555) 123-4567</p>
//         </div>
//       </div>
//     </div>
//   );

//   const Schedule = () => (
//     <div className="h-full p-4 overflow-y-auto">
//       <h2 className="text-xl font-semibold mb-4">Vehicle Schedule</h2>
//       <div className="space-y-4">
//         <div>
//           <h3 className="font-medium">Morning Route</h3>
//           <p>ETD from home: 7:30 AM</p>
//           <p>ETA at school: 8:00 AM</p>
//         </div>
//         <div>
//           <h3 className="font-medium">Afternoon Route</h3>
//           <p>ETD from school: 3:00 PM</p>
//           <p>ETA at home: 3:30 PM</p>
//         </div>
//       </div>
//     </div>
//   );

//   const renderContent = () => {
//     switch (activeTab) {
//       case "map":
//         return <MapView />;
//       case "user":
//         return <UserInfo />;
//       case "schedule":
//         return <Schedule />;
//       default:
//         return <HomeView />;
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       <header className="p-4 bg-primary text-primary-foreground">
//         <h1 className="text-2xl font-bold">Hola, oli</h1>
//       </header>

//       <main className="flex-1 overflow-auto space-y-4">
//         <div className="flex-1 overflow-y-auto">{renderContent()}</div>
//       </main>

//       <footer className="flex justify-around p-4 bg-background border-t">
//         <Button
//           className={`p-4 ${activeTab === "default" ? "bg-gray-700" : ""}`}
//           onClick={() => setActiveTab("default")}
//         >
//           <Home className="h-6 w-6" />
//         </Button>
//         <Button
//           className={`p-4 ${activeTab === "map" ? "bg-gray-700" : ""}`}
//           onClick={() => setActiveTab("map")}
//         >
//           <MapPin className="h-6 w-6" />
//         </Button>
//         <Button
//           className={`p-4 ${activeTab === "user" ? "bg-gray-700" : ""}`}
//           onClick={() => setActiveTab("user")}
//         >
//           <User className="h-6 w-6" />
//         </Button>
//         <Button
//           className={`p-4 ${activeTab === "schedule" ? "bg-gray-700" : ""}`}
//           onClick={() => setActiveTab("schedule")}
//         >
//           <Clock className="h-6 w-6" />
//         </Button>
//       </footer>
//     </div>
//   );
// }
