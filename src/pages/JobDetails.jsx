
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function JobDetails() {
  const { id } = useParams();

  const [job, setJob] = useState(null);

  useEffect(() => {
    getJob();
  }, []);

  async function getJob() {
    try {
      const response = await api.get(`/jobs/${id}`);

      setJob(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!job) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details">
      <h1>{job.title}</h1>

      <p>{job.description}</p>

      <h3>Company</h3>
      <p>{job.company}</p>

      <h3>Location</h3>
      <p>{job.location}</p>

      <h3>Category</h3>
      <p>{job.category}</p>

      <h3>Job Type</h3>
      <p>{job.jobType}</p>

      <h3>Salary</h3>
      <p>{job.salary}</p>

      <h3>Experience</h3>
      <p>{job.experience}</p>

      <h3>Required Skills</h3>

      <ul>
        {job.requiredSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>Job Status</h3>
      <p>{job.status}</p>

      <h3>Posted Date</h3>
      <p>{job.postedDate}</p>
    </div>
  );
}

export default JobDetails;
