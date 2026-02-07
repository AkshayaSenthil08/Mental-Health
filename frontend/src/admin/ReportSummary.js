import React from "react";

const ReportSummary = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      <div className="card"> Avg Mood: <b>4.2</b></div>
      <div className="card"> Activity: <b>72%</b></div>
      <div className="card"> Avg Sleep: <b>6.6 hrs</b></div>
    </div>
  );
};

export default ReportSummary;
