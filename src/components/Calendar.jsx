import React, { useState } from "react";

// Simple calendar for current month
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getDaysArray(year, month) {
  const numDays = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= numDays; d++) days.push(d);
  return days;
}

export default function Calendar() {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const days = getDaysArray(year, month);

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else {
      setMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else {
      setMonth((m) => m + 1);
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Calendar</h2>
      <div className="bg-white text-white dark:bg-gray-800 p-4 rounded shadow">
        <div className="flex items-center justify-between mb-2">
          <button
            className="px-2 py-1 rounded bg-gray-200  dark:bg-gray-700"
            onClick={prevMonth}
          >
            &lt;
          </button>
          <span className="font-semibold">
            {today
              .toLocaleString("default", { month: "long", year: "numeric" })
              .replace(today.getMonth(), month)
              .replace(today.getFullYear(), year)}
            {` ${year}`}
          </span>
          <button
            className="px-2 py-1 rounded bg-gray-200  dark:bg-gray-700"
            onClick={nextMonth}
          >
            &gt;
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center">
          {daysOfWeek.map((d) => (
            <div key={d} className="font-bold text-blue-600 dark:text-blue-300">
              {d}
            </div>
          ))}
          {days.map((d, i) =>
            d ? (
              <div
                key={i}
                className={`py-2 rounded ${
                  d === today.getDate() &&
                  month === today.getMonth() &&
                  year === today.getFullYear()
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-100 dark:hover:bg-gray-700"
                }`}
              >
                {d}
              </div>
            ) : (
              <div key={i}></div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
