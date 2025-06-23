import React from "react";

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded shadow p-6 flex flex-col items-center">
          <span className="text-3xl font-bold text-blue-600">1,245</span>
          <span className="mt-2 text-gray-500 dark:text-gray-300">Users</span>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded shadow p-6 flex flex-col items-center">
          <span className="text-3xl font-bold text-green-600">₹58,900</span>
          <span className="mt-2 text-gray-500 dark:text-gray-300">Revenue</span>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded shadow p-6 flex flex-col items-center">
          <span className="text-3xl font-bold text-yellow-600">23</span>
          <span className="mt-2 text-gray-500 dark:text-gray-300">Tasks</span>
        </div>
      </div>
      <div className="bg-white text-white dark:bg-gray-800 rounded shadow p-6">
        <h3 className="text-lg font-semibold mb-2">Welcome!</h3>
        <p className="text-gray-600 dark:text-gray-300">
          This is your admin dashboard. Use the sidebar to navigate between
          features like tables, charts, calendar, and Kanban board.
        </p>
      </div>
    </div>
  );
}
