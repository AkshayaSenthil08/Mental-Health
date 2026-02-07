import React, { useState } from "react";

const VideoCall = () => {
  const [room, setRoom] = useState("");

  return (
    <div className="video-page">
      <div className="video-header">
        <h2>Mental Health Session</h2>
        <p className="video-subtext">Safe • Private • One-to-One Support</p>
      </div>

      <div className="bigvideo">
        <div className="videopic">
        <img src="https://healthtechmagazine.net/sites/healthtechmagazine.net/files/styles/cdw_hero/public/articles/%5Bcdw_tech_site%3Afield_site_shortname%5D/202305/GettyImages-1399396111.jpg?itok=5k4EoYdD" alt="" />
        </div>

        {!room && (
          <div className="info-grid">
            <div className="info-card red">
              <h4>Why this session?</h4>
              <p>Talk freely with a therapist or trusted person.</p>
            </div>

            <div className="info-card blue">
              <h4>Privacy First</h4>
              <p>Calls are not recorded. Each room is temporary.</p>
            </div>

            <div className="info-card green">
              <h4>Best Experience</h4>
              <p>Use headphones and a quiet place.</p>
            </div>
          </div>
        )}
      </div>

      {!room && (
        <div className="btns">
          <input
            type="text"
            placeholder="Enter Room ID from Counsellor"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
      )}

      {room && (
        <div className="session-box">
          <iframe
            title="mental-health-video-session"
            src={`https://meet.jit.si/${room}#config.prejoinPageEnabled=false&config.lobby.enabled=false`}
            allow="camera; microphone; fullscreen; display-capture"
            className="video-frame"
          />
        </div>
      )}
    </div>
  );
};

export default VideoCall;
