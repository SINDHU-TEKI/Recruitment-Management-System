
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import EditJob from "../pages/EditJob";
import Candidates from "../pages/Candidates";
import Applications from "../pages/Applications";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import SavedJobs from "../pages/SavedJobs";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/jobs" element={<Jobs />} />

      <Route path="/jobs/:id" element={<JobDetails />} />

      <Route
        path="/add-job"
        element={
          <ProtectedRoute>
            <AddJob />
          </ProtectedRoute>
        }
      />

      <Route path="/edit-job/:id" element={<EditJob />} />

      <Route path="/candidates" element={<Candidates />} />

      <Route path="/applications" element={<Applications />} />

      <Route path="/saved-jobs" element={<SavedJobs />} />

      <Route path="/register" element={<Register />} />

      <Route path="/login" element={<Login />} />

      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
}

export default AppRoutes;
