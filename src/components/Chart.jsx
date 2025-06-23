const data = [
  { label: "Jan", value: 30 },
  { label: "Feb", value: 50 },
  { label: "Mar", value: 40 },
  { label: "Apr", value: 70 },
  { label: "May", value: 60 },
];

export default function Chart() {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Monthly Data (Bar Chart)</h2>
      <div className="bg-white  dark:bg-gray-800 p-6 rounded shadow flex flex-col items-center">
        <svg viewBox="0 0 350 180" width="100%" height="180">
          {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
            <g key={i}>
              <line
                x1="40"
                x2="320"
                y1={30 + 120 * t}
                y2={30 + 120 * t}
                stroke="#e5e7eb"
                strokeDasharray="4"
              />
              <text
                x="30"
                y={35 + 120 * t}
                fontSize="12"
                fill="#6b7280"
                textAnchor="end"
                alignmentBaseline="middle"
              >
                {Math.round(max * (1 - t))}
              </text>
            </g>
          ))}
          {data.map((d, i) => (
            <g key={d.label}>
              <rect
                x={60 + i * 50}
                y={30 + 120 * (1 - d.value / max)}
                width="32"
                height={120 * (d.value / max)}
                rx="6"
                fill="#3b82f6"
                className="transition-all duration-300"
              />
              <text
                x={76 + i * 50}
                y={165}
                fontSize="13"
                className="fill-gray-700 dark:fill-white"
                textAnchor="middle"
              >
                {d.label}
              </text>
              <text
                x={76 + i * 50}
                y={25 + 120 * (1 - d.value / max)}
                fontSize="12"
                fill="#2563eb"
                textAnchor="middle"
                fontWeight="bold"
              >
                {d.value}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
