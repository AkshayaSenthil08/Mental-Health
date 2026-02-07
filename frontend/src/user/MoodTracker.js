import React, { useEffect, useState } from "react";
import axios from "axios";
import MoodGraph from "./MoodGraph";

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [moods, setMoods] = useState([]);

  const today = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    const saved = localStorage.getItem("moods");
    if (saved) setMoods(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("moods", JSON.stringify(moods));
  }, [moods]);

  const saveMood = async () => {
    if (!selectedMood) {
      alert("Please select the mood");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/v1/mood", {
        userId: "user123",
        date: today,
        moodvalue: selectedMood,
      });
    } catch (e) {}

    setMoods((prev) => {
      const filtered = prev.filter((m) => m.date !== today);
      return [...filtered, { date: today, moodvalue: selectedMood }];
    });

    alert("Mood saved ");
  };

  return (
    <div className="mood-page">
      <div className="mood-card-wrapper">
        <div className="gradient-bg"></div>

        <div className="glass-card">
          <h2>How are you feeling today?</h2>

          <div className="mood-buttons">
            {[
              { value: 1, emoji: "😡" },
              { value: 2, emoji: "😔" },
              { value: 3, emoji: "😐" },
              { value: 4, emoji: "🙂" },
              { value: 5, emoji: "😄" },
            ].map((m) => (
              <div
                key={m.value}
                className={`mood ${
                  selectedMood === m.value ? "active" : ""
                }`}
                onClick={() => setSelectedMood(m.value)}
              >
                {m.emoji}
              </div>
            ))}
          </div>

          {selectedMood && (
            <p className="selected-text">
              Selected: {selectedMood}/5
            </p>
          )}

          <button className="save-btn" onClick={saveMood}>
            Save Mood
          </button>
        </div>
      </div>

      {moods.length > 0 && (
        <div className="graph-section">
          <MoodGraph moods={moods} />
        </div>
      )}
    </div>
  );
};

export default MoodTracker;
