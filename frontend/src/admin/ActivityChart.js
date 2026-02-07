import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { day: "Mon", activity: 60 },
  { day: "Tue", activity: 80 },
  { day: "Wed", activity: 40 },
  { day: "Thu", activity: 90 },
  { day: "Fri", activity: 70 },
];

const ActivityChart = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h3> Daily Activity</h3>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="activity" fill="#16a34a" />
      </BarChart>
    </div>
  );
};

export default ActivityChart;
