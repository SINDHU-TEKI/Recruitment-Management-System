import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  addFavorite
} from "../features/savedJobsSlice";

function JobCard({ job, onDelete }) {

  const dispatch = useDispatch();

  function handleFavorite() {

    dispatch(
      addFavorite(job)
    );

  }

  return (

    <div className="card">

      <h3>{job.title}</h3>

      <p>{job.company}</p>

      <p>{job.location}</p>

      <p>{job.category}</p>

      <p>Salary: {job.salary}</p>

      <p>Experience: {job.experience}</p>

      <div className="card-actions">

        <Link
          className="view-btn"
          to={`/jobs/${job.id}`}
        >
          View
        </Link>

        <Link
          className="edit-btn"
          to={`/edit-job/${job.id}`}
        >
          Edit
        </Link>

        <button
          className="delete-btn"
          onClick={() => onDelete(job.id)}
        >
          Delete
        </button>

        <button
          className="favorite-btn"
          onClick={handleFavorite}
        >
          ❤ Add To Saved Jobs
        </button>

      </div>

    </div>

  );
}

export default JobCard;