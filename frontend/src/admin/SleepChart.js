import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { day: "Mon", sleep: 6 },
  { day: "Tue", sleep: 7 },
  { day: "Wed", sleep: 5 },
  { day: "Thu", sleep: 8 },
  { day: "Fri", sleep: 7 },
];

const SleepChart = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Sleep Hours</h3>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sleep" stroke="#9333ea" />
      </LineChart>
    </div>
  );
};

export default SleepChart;
