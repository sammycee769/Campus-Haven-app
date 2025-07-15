import React from 'react';

export default function NotificationsPage() {
  const dummyNotifications = [
    "Your listing has been viewed 5 times today.",
    "New message from a tenant regarding 1-bedroom apartment.",
    "Verification in progress for your recent listing.",
    "Reminder: You haven’t updated your listing in 7 days."
  ];

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Notifications</h1>
      <ul className="space-y-3">
        {dummyNotifications.map((note, index) => (
          <li
            key={index}
            className="bg-white p-3 rounded shadow text-gray-700 border"
          >
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
}
