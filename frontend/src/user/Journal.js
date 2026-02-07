import React, { useEffect, useState } from "react";

const Journal = () => {
  const [mood, setMood] = useState(null);
  const [entry, setEntry] = useState("");
  const [energy, setEnergy] = useState(3);
  const [sleepHours, setSleepHours] = useState(7);
  const [sleepQuality, setSleepQuality] = useState("Good");
  const [gratitude, setGratitude] = useState("");
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    setJournals([
      {
        id: 1,
        date: "10 Jan 2025",
        mood: "🙂",
        entry: "Feeling peaceful today.",
        energy: 4,
        sleep: "7 hrs",
        sleepQuality: "Good",
        gratitude: "Family",
      },
    ]);
  }, []);

  const saveJournal = () => {
    const newEntry = {
      id: Date.now(),
      date: new Date().toDateString(),
      mood: ["😞", "😐", "🙂", "😄"][mood],
      entry,
      energy,
      sleep: `${sleepHours} hrs`,
      sleepQuality,
      gratitude,
    };

    setJournals([newEntry, ...journals]);

    setMood(null);
    setEntry("");
    setEnergy(3);
    setSleepHours(7);
    setSleepQuality("Good");
    setGratitude("");
  };

  return (
    <div className="journal-page">

      <div className="hero-card">
        <img src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8" />
        <div className="hero-overlay">
          <h1>MENTAL HEALTH JOURNAL</h1>
        </div>
      </div>


<div className="bigjournal">
   <div className="journal-card">
        <h3>Daily Check-in</h3>

        <div className="mood-row">
          {["😞", "😐", "🙂", "😄"].map((m, i) => (
            <button
              key={i}
              className={mood === i ? "mood active" : "mood"}
              onClick={() => setMood(i)}
            >
              {m}
            </button>
          ))}
        </div>

        <textarea
          placeholder="Write about your day..."
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />

        <label>Energy Level: {energy}</label>
        <input
          type="range"
          min="1"
          max="5"
          value={energy}
          onChange={(e) => setEnergy(e.target.value)}
        />

        <label>Sleep Hours: {sleepHours}</label>
        <input
          type="range"
          min="1"
          max="10"
          value={sleepHours}
          onChange={(e) => setSleepHours(e.target.value)}
        />

        <select
          value={sleepQuality}
          onChange={(e) => setSleepQuality(e.target.value)}
        >
          <option>Poor</option>
          <option>Average</option>
          <option>Good</option>
          <option>Great</option>
        </select>

        <input
          type="text"
          placeholder="Grateful for..."
          value={gratitude}
          onChange={(e) => setGratitude(e.target.value)}
        />

        <button className="save-btn" onClick={saveJournal}>
          Save Journal
        </button>
      </div>

      <div className="old-journals">
        <h3>Previous Entries</h3>

        {journals.map((j) => (
          <div key={j.id} className="journal-history-card">
            <div className="top">
              <span>{j.date}</span>
            </div>

            <p>{j.entry}</p>

            <div className="stats">
              <span> {j.energy}</span>
              <span> {j.sleep}</span>
              <span> {j.sleepQuality}</span>
            </div>

          </div>
        ))}
      </div>
</div>
    </div>
  );
};

export default Journal;
