import { useNavigate } from "react-router-dom";
import {
  FiSmile,
  FiBook,
  FiVideo,
  FiUser,
  FiAlertCircle,
} from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";


const actions = [
  {
    title: "Track Mood",
    desc: "Log how you feel today",
    icon: <FiSmile />,
    path: "/track",
  },
  {
    title: "Write Journal",
    desc: "Express your thoughts",
    icon: <FiBook />,
    path: "/journal",
  },
  {
    title: "Consult Online",
    desc: "Talk to professionals",
    icon: <FiVideo />,
    path: "/video",
  },
  {
    title: "Find Counsellors",
    desc: "Get expert support",
    icon: <FiUser />,
    path: "/counsel",
  },
  {
    title: "My Appointments",
    desc: "Get Your Appointments",
    icon:  <FiCalendar />,
    path: "/getappoint",
    danger: true,
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="wrap">
      <div className="left">
        <h1>
          Take care of your <span>Mind</span>
        </h1>
        <p>
          Small steps every day make a big difference.
          Track, reflect and seek help whenever needed.
        </p>

        <img
          src="https://clovedental.in/wp-content/uploads/2018/12/mental-health-2019924_960_720-2-604x270.jpg"
          alt="mental care"
        />
      </div>

      <div className="right">
        {actions.map((a, i) => (
          <div
            key={i}
            className={`action ${a.danger ? "danger" : ""}`}
            onClick={() => navigate(a.path)}
          >
            <div className="icon">{a.icon}</div>
            <div>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
