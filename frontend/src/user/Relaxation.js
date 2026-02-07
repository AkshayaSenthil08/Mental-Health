import React, { useState } from "react";

const Relaxation = () => {
  const [step, setStep] = useState("inhale");

  const startBreathing = () => {
    setStep("inhale");
    setTimeout(() => setStep("hold"), 4000);
    setTimeout(() => setStep("exhale"), 7000);
  };

  return (
    <div className="relax-container">
      <h2> Relax & Breathe</h2>

      <div className="breathing-circle">
        {step === "inhale" && "Inhale "}
        {step === "hold" && "Hold "}
        {step === "exhale" && "Exhale "}
      </div>

      <button onClick={startBreathing}>
        Start Breathing
      </button>

      <div className="tips">
        <h3> Calm Tips</h3>
        <ul>
          <li>Take deep breaths</li>
          <li>Drink some water</li>
          <li>Close your eyes for 1 minute</li>
          <li>Relax your shoulders</li>
        </ul>
      </div>

      <audio controls className="audio">
        <source src="/relax.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Relaxation;
