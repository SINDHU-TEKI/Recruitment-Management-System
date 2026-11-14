
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const savedJobs = useSelector(
    state => state.savedJobs
  );

  return (
    <nav>
      <Link to="/">Home</Link>

      <Link to="/jobs">Jobs</Link>

      <Link to="/saved-jobs">
        Saved Jobs ({savedJobs.length})
      </Link>

      {!user && (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}

      {user && <Link to="/logout">Logout</Link>}
    </nav>
  );
}

export default Navbar;
