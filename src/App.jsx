import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Kanban from "./components/Kanban";
import Calendar from "./components/Calendar";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Table from "./components/Table";
import Chart from "./components/Chart";

function App() {
  const [page, setPage] = useState("dashboard");
  const [theme, setTheme] = useState("light");

  return (
    <div
      className={
        theme === "dark"
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-gray-100 text-gray-900 min-h-screen"
      }
    >
      <Header setPage={setPage} />
      <div className="flex">
        <Sidebar setPage={setPage} page={page} />
        <main className="flex-1 p-6">
          <ThemeSwitcher theme={theme} setTheme={setTheme} />
          {page === "dashboard" && <Dashboard />}
          {page === "kanban" && <Kanban />}
          {page === "calendar" && <Calendar />}
          {page === "table" && <Table />}
          {page === "chart" && <Chart />}
        </main>
      </div>
    </div>
  );
}

export default App;
