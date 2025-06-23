import React from "react";

const navItems = [
  { key: "dashboard", label: "Dashboard" },
  { key: "table", label: "Table" },
  { key: "chart", label: "Charts" },
  { key: "calendar", label: "Calendar" },
  { key: "kanban", label: "Kanban" },
];

export default function Sidebar({ setPage, page }) {
  return (
    <aside className="w-56 bg-white dark:bg-gray-800 h-screen shadow-md">
      <nav className="flex flex-col gap-2 p-4 text-white">
        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setPage(item.key)}
            className={`text-left px-4 py-2 rounded hover:bg-blue-100 dark:hover:bg-gray-700 ${
              page === item.key ? "bg-blue-500 text-white" : ""
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
