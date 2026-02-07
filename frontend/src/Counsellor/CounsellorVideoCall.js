import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const CounsellorVideoCall = () => {
  const [room, setRoom] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const createRoom = () => {
    const newRoom =
      "mh-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
    setRoom(newRoom);
  };

  const endCall = () => {
    setRoom("");
  };

  const handleLogout = () => {
    endCall();
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="navcontent">
        <div className={`navbar ${open ? "slide-in" : "slide-out"}`}>
          <Link to="/counsellordashboard"><p>Home</p></Link>
          <Link to="/counsellorCall"><p>Calls</p></Link>
          <p onClick={handleLogout} className="logout-text">Logout</p>
        </div>

        <div className="menubar">
          <h3>Admin</h3>
          <GiHamburgerMenu
            className="bar"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      {/* VIDEO PAGE */}
      <div className="video-pages">
        {!room ? (
          <div className="form_main">
            <p className="heading">Start Session</p>

            <p className="login-note">
              🔐 <b>Please log in before starting the session</b><br />
              Login (Google / GitHub) is required to become the moderator.
            </p>

            <button onClick={createRoom}>
              Create & Start Call
            </button>
          </div>
        ) : (
          <div className="session-box">
            <p>
              Room ID: <b>{room}</b>
            </p>
            <p>Share this Room ID with user</p>

            <p className="login-note">
              🔐 <b>Important:</b> Please log in inside the call window
              to start the session as moderator.
            </p>

            <iframe
              src={`https://meet.jit.si/${room}`}
              allow="camera; microphone; fullscreen; display-capture"
              className="video-frame"
              title="counsellor-jitsi"
            />

            <button className="end-btn" onClick={endCall}>
              End Call
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CounsellorVideoCall;
