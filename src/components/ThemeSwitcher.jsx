import React from "react";

export default function ThemeSwitcher({ theme, setTheme }) {
  return (
    <div className="mb-4">
      <button
        className="px-3 py-1 rounded bg-blue-500 text-white mr-2"
        onClick={() => setTheme("light")}
      >
        Light
      </button>
      <button
        className="px-3 py-1 rounded bg-gray-800 text-white"
        onClick={() => setTheme("dark")}
      >
        Dark
      </button>
    </div>
  );
}
