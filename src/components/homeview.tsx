import WeeklyAttendance from "./weekly-attendance";
import TripInformation from "./trip-information";
import Notifications from "./notifications";
import SchoolEvents from "./school-events";

export default function Home() {
  return (
    <main>
      <header className="bg-emerald-500 z-10 p-4 text-primary-foreground border-b fixed top-0 w-full">
        <h1 className=" text-2xl font-bold">Hola, Jotaerre</h1>
      </header>
      <div className="h-full my-20 z-20 flex flex-col items-center max-w-full gap-8">
        <WeeklyAttendance />
        <TripInformation />
        <Notifications />
        <SchoolEvents />
      </div>
    </main>
  );
}
