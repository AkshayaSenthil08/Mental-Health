import {  Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./user/Dashboard";
import MoodTracker from "./user/MoodTracker";
import Journal from "./user/Journal";
import VideoCall from "./user/VideoCall";
import Emergency from "./user/Emergency";
import Relaxation from "./user/Relaxation";
import Counsellor from "./user/Counsellor";
import Profile from './user/Profile'
import AdminDashboard from "./admin/AdminDashboard";
import Attenders from "./admin/Attenders";
import Counsellors from "./admin/Counsellors";
import './App.css'
import Reports from "./admin/Reports";
import Settings from "./admin/Settings";
import CounsellorDetails from "./user/CounsellorDetails";
import MyAppointments from "./user/MyAppointments";
import DoctorDetails from "./admin/DoctorDetails";
import Pending from "./admin/Pending";
import EditUser from "./admin/EditUser";
import CounsellorDashboard from "./Counsellor/CounsellorDashboard"
import CounsellorAppointments from "./Counsellor/CounsellorAppointments";
import CounsellorVideoCall from './Counsellor/CounsellorVideoCall'
import ApprovedAppointments from './Counsellor/ApprovedAppointments'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dash" element={<Dashboard/>}></Route>
        <Route path="/track" element={<MoodTracker/>}></Route>
        <Route path="/journal" element={<Journal/>}></Route>
        <Route path="/video" element={<VideoCall/>}></Route>
        <Route path="/emergency" element={<Emergency/>}></Route>
        <Route path="/relax" element={<Relaxation/>}></Route>
        <Route path="/counsel" element={<Counsellor/>}></Route>
        <Route path="/pro" element={<Profile/>}></Route>
        <Route path="/admindash" element={<AdminDashboard/>}></Route>
        <Route path="/attend" element={<Attenders/>}></Route>
        <Route path="/getcounsellist" element={<Counsellors/>}></Route>
        <Route path="/reports" element={<Reports/>}></Route>
        <Route path="/set" element={<Settings/>}></Route>
        <Route path="/details/:id" element={<CounsellorDetails/>}></Route>
        <Route path="/getappoint" element={<MyAppointments/>}></Route>
        <Route path="/doctor/:id" element={<DoctorDetails/>}></Route>
        <Route path="/pend" element={<Pending/>}></Route>
        <Route path="/edit-user/:id" element={<EditUser/>}></Route>
        <Route path="/counsellorDashboard" element={<CounsellorDashboard/>}></Route>
        <Route path="/counsellorAppointment" element={<CounsellorAppointments/>}></Route>
        <Route path="/counsellorCall" element={<CounsellorVideoCall/>}></Route>
        <Route path="/approvedAppointments" element={<ApprovedAppointments/>}></Route>
      </Routes>
  );
}

export default App;
