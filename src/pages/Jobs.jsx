
import { useEffect, useState } from "react";
import api from "../services/api";
import JobCard from "../components/JobCard";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [salary, setSalary] = useState("All");
  const [sort, setSort] = useState("");

  useEffect(() => {
    getJobs();
  }, []);

  async function getJobs() {
    try {
      const response = await api.get("/jobs");

      console.log("Jobs data:", response.data);

      setJobs(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteJob(id) {
    try {
      await api.delete(`/jobs/${id}`);

      setJobs((previousJobs) =>
        previousJobs.filter((job) => job.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  }

  function getSalaryValue(job) {
    return parseFloat(
      String(job.salary).replace(/[^\d.]/g, "")
    ) || 0;
  }

  const filteredJobs = jobs.filter((job) => {

    const searchMatch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    const categoryMatch =
      category === "All" ||
      job.category === category;

    const salaryValue = getSalaryValue(job);

    const salaryMatch =
      salary === "All" ||
      (salary === "3-5 LPA" &&
        salaryValue >= 3 && salaryValue < 5) ||
      (salary === "5-8 LPA" &&
        salaryValue >= 5 && salaryValue < 8) ||
      (salary === "8-12 LPA" &&
        salaryValue >= 8 && salaryValue <= 12);

    return (
      searchMatch &&
      categoryMatch &&
      salaryMatch
    );
  });

  let finalJobs = [...filteredJobs];

  if (sort === "high") {
    finalJobs.sort(
      (a, b) => getSalaryValue(b) - getSalaryValue(a)
    );
  }

  if (sort === "low") {
    finalJobs.sort(
      (a, b) => getSalaryValue(a) - getSalaryValue(b)
    );
  }

  return (
    <>
      <h1>Available Jobs</h1>

      <div className="filters">

        <input
          type="text"
          placeholder="Search Job Title or Company"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option value="All">All Categories</option>
          <option value="IT">IT</option>
          <option value="Analytics">Analytics</option>
        </select>

        <select
          value={salary}
          onChange={(e) =>
            setSalary(e.target.value)
          }
        >
          <option value="All">All Salaries</option>
          <option value="3-5 LPA">3-5 LPA</option>
          <option value="5-8 LPA">5-8 LPA</option>
          <option value="8-12 LPA">8-12 LPA</option>
        </select>

        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
        >
          <option value="">Sort Salary</option>
          <option value="high">High To Low</option>
          <option value="low">Low To High</option>
        </select>

      </div>

      <div className="jobs">
        {finalJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onDelete={deleteJob}
          />
        ))}
      </div>
    </>
  );
}

export default Jobs;
