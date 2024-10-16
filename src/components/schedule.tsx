export const Schedule = () => (
  <div className="h-full p-4 overflow-y-auto">
    <h2 className="text-xl font-semibold mb-4">Vehicle Schedule</h2>
    <div className="space-y-4">
      <div>
        <h3 className="font-medium">Morning Route</h3>
        <p>ETD from home: 7:30 AM</p>
        <p>ETA at school: 8:00 AM</p>
      </div>
      <div>
        <h3 className="font-medium">Afternoon Route</h3>
        <p>ETD from school: 3:00 PM</p>
        <p>ETA at home: 3:30 PM</p>
      </div>
    </div>
  </div>
);
