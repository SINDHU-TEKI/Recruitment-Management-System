
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addFavorite } from "../features/savedJobsSlice";

function JobCard({ job, onDelete }) {

  const dispatch = useDispatch();

  function handleFavorite() {
    dispatch(
      addFavorite(job)
    );
  }

  if (!job) {
    return null;
  }

  function getJobImage() {
    const title = job.title.toLowerCase();

    if (title.includes("data")) {
      return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800";
    }

    if (title.includes("frontend")) {
      return "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800";
    }

    if (title.includes("java")) {
      return "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800";
    }

    return "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800";
  }

  return (
    <div className="card">

      <img
        src={getJobImage()}
        alt={job.title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px"
        }}
      />

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
