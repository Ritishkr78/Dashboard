import React, { useState } from "react";

const initialTasks = {
  todo: [
    { id: 1, text: "Design UI" },
    { id: 2, text: "Setup database" },
  ],
  doing: [{ id: 3, text: "Develop API" }],
  done: [{ id: 4, text: "Project setup" }],
};

const columns = [
  { key: "todo", label: "To Do" },
  { key: "doing", label: "Doing" },
  { key: "done", label: "Done" },
];

export default function Kanban() {
  const [tasks, setTasks] = useState(initialTasks);

  // Move task to another column
  const moveTask = (from, to, taskId) => {
    const task = tasks[from].find((t) => t.id === taskId);
    setTasks((prev) => ({
      ...prev,
      [from]: prev[from].filter((t) => t.id !== taskId),
      [to]: [...prev[to], task],
    }));
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Kanban Board</h2>
      <div className="flex gap-4">
        {columns.map((col) => (
          <div
            key={col.key}
            className="flex-1 bg-gray-100 text-white dark:bg-gray-800 rounded p-3 min-h-[200px]"
          >
            <h3 className="font-bold mb-2">{col.label}</h3>
            {tasks[col.key].map((task) => (
              <div
                key={task.id}
                className="bg-white text-white dark:bg-gray-700 rounded p-2 mb-2 shadow flex justify-between items-center"
              >
                <span>{task.text}</span>
                <div className="flex gap-1">
                  {columns
                    .filter((c) => c.key !== col.key)
                    .map((c) => (
                      <button
                        key={c.key}
                        className="text-xs px-2 py-1 rounded bg-blue-500 text-white"
                        onClick={() => moveTask(col.key, c.key, task.id)}
                      >
                        {c.label}
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
