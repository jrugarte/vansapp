// "use client";
// import React, { useState } from "react";
// import { Map, Home, User, Clock } from "lucide-react";
// import ParentView from "./ParentView";
// import DeviceTracker from "./device-tracker";

// const MapView = () => (
//   <div className="h-full flex items-center justify-center bg-gray-200">
//     <DeviceTracker />
//   </div>
// );

// const UserInfo = () => (
//   <div className="h-full p-4 overflow-y-auto">
//     <h2 className="text-xl font-semibold mb-4">User Information</h2>
//     <div className="space-y-4">
//       <div>
//         <h3 className="font-medium">Children</h3>
//         <ul className="list-disc list-inside">
//           <li>John (10 years old) - Springfield Elementary</li>
//           <li>Sarah (8 years old) - Springfield Elementary</li>
//         </ul>
//       </div>
//       <div>
//         <h3 className="font-medium">School Information</h3>
//         <p>Springfield Elementary School</p>
//         <p>123 School St, Springfield, ST 12345</p>
//         <p>Phone: (555) 123-4567</p>
//       </div>
//     </div>
//   </div>
// );

// const Schedule = () => (
//   <div className="h-full p-4 overflow-y-auto">
//     <h2 className="text-xl font-semibold mb-4">Vehicle Schedule</h2>
//     <div className="space-y-4">
//       <div>
//         <h3 className="font-medium">Morning Route</h3>
//         <p>ETD from home: 7:30 AM</p>
//         <p>ETA at school: 8:00 AM</p>
//       </div>
//       <div>
//         <h3 className="font-medium">Afternoon Route</h3>
//         <p>ETD from school: 3:00 PM</p>
//         <p>ETA at home: 3:30 PM</p>
//       </div>
//     </div>
//   </div>
// );

// const MobileApp = () => {
//   const [activeTab, setActiveTab] = useState("map");

//   // const renderContent = () => {
//   //   switch (activeTab) {
//   //     case "map":
//   //       return <MapView />;
//   //     case "user":
//   //       return <UserInfo />;
//   //     case "schedule":
//   //       return <Schedule />;
//   //     default:
//   //       return <HomeView />;
//   //   }
//   // };

//   return (
//     <div className="h-screen flex flex-col bg-white">
//       {/* <div className="flex-1 overflow-y-auto">{renderContent()}</div> */}
//       <nav className="bg-gray-800 text-white">
//         <ul className="flex justify-around">
//           <li>
//             <button
//               className={`p-4 ${activeTab === "home" ? "bg-gray-700" : ""}`}
//               onClick={() => setActiveTab("home")}
//             >
//               <Home size={24} />
//             </button>
//           </li>
//           <li>
//             <button
//               className={`p-4 ${activeTab === "map" ? "bg-gray-700" : ""}`}
//               onClick={() => setActiveTab("map")}
//             >
//               <Map size={24} />
//             </button>
//           </li>
//           <li>
//             <button
//               className={`p-4 ${activeTab === "user" ? "bg-gray-700" : ""}`}
//               onClick={() => setActiveTab("user")}
//             >
//               <User size={24} />
//             </button>
//           </li>
//           <li>
//             <button
//               className={`p-4 ${activeTab === "schedule" ? "bg-gray-700" : ""}`}
//               onClick={() => setActiveTab("schedule")}
//             >
//               <Clock size={24} />
//             </button>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default MobileApp;
