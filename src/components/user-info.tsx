export const UserInfo = () => (
  <div className="h-full p-4 overflow-y-auto">
    <h2 className="text-xl font-semibold mb-4">User Information</h2>
    <div className="space-y-4">
      <div>
        <h3 className="font-medium">Children</h3>
        <ul className="list-disc list-inside">
          <li>John (10 years old) - Springfield Elementary</li>
          <li>Sarah (8 years old) - Springfield Elementary</li>
        </ul>
      </div>
      <div>
        <h3 className="font-medium">School Information</h3>
        <p>Springfield Elementary School</p>
        <p>123 School St, Springfield, ST 12345</p>
        <p>Phone: (555) 123-4567</p>
      </div>
    </div>
  </div>
);
