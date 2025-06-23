import React from "react";

const data = [
  { id: 1, name: "John Doe", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", role: "Editor", status: "Inactive" },
  { id: 3, name: "Alice Johnson", role: "Viewer", status: "Active" },
  { id: 4, name: "Bob Brown", role: "Editor", status: "Active" },
];

export default function Table() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">User Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-white dark:bg-gray-800 rounded shadow">
          <thead>
            <tr>
              <th className="py-3 px-6 bg-gray-100 text-white dark:bg-gray-700 text-left">
                ID
              </th>
              <th className="py-3 px-6 bg-gray-100 text-white dark:bg-gray-700 text-left">
                Name
              </th>
              <th className="py-3 px-6 bg-gray-100 text-white dark:bg-gray-700 text-left">
                Role
              </th>
              <th className="py-3 px-6 bg-gray-100 text-white dark:bg-gray-700 text-left">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={row.id}
                className={`border-b dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 transition ${
                  idx % 2 === 0 ? "bg-gray-50 dark:bg-gray-900" : ""
                }`}
              >
                <td className="py-3 px-6">{row.id}</td>
                <td className="py-3 px-6">{row.name}</td>
                <td className="py-3 px-6">{row.role}</td>
                <td className="py-3 px-6">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      row.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
