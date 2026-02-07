import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Emergency = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  const sendEmergency = async () => {
    if (!message || !type) {
      setStatus("error");
      return;
    }

    try {
      const resp = await axios.post(
        "https://mental-health-hf3c.onrender.com/api/v1/emergency",
        {
          message,
          type,
        }
      );

      if (resp.data.success) {
        setStatus("success");
        setMessage("");
        setType("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="em-wrapper">
      <div className="em-card">
        <h2>Emergency Support</h2>

        <p className="em-reassure">
          You are not alone. This moment will pass.  
          Help is available right now 
        </p>

        <div className="em-helpline">
          <h4> Immediate Help (India)</h4>
          <p>Suicide & Crisis Helpline: <b>9152987821</b></p>
          <p>Kiran Mental Health: <b>1800-599-0019</b></p>
          <p>Emergency Services: <b>112</b></p>
        </div>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Select emergency type</option>
          <option>Emotional distress</option>
          <option>Panic / Anxiety attack</option>
          <option>Self-harm thoughts</option>
          <option>Immediate danger</option>
        </select>

        <textarea
          placeholder="Describe what you are going through..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="em-ground">
          <h4> Calm Breathing</h4>
          <p>Inhale – 4 seconds</p>
          <p>Hold – 4 seconds</p>
          <p>Exhale – 6 seconds</p>
          <p className="repeat">Repeat 3 times</p>
        </div>

        <p className="em-privacy">
          Your message is confidential and will only be reviewed by
          professionals.
        </p>

        <button className="em-btn" onClick={sendEmergency}>
          Send Emergency Request
        </button>

        {status === "success" && (
          <div className="em-status success">
            Emergency request sent successfully
            <button onClick={() => navigate("/dash")}>
              Go Back to Dashboard
            </button>
          </div>
        )}

        {status === "error" && (
          <div className="em-status error">
            Please select type and describe your problem
          </div>
        )}
      </div>
    </div>
  );
};

export default Emergency;
