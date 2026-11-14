
import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function AddJob() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    category: "",
    salary: "",
    description: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post("/jobs", formData);

    navigate("/jobs");
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          onChange={handleChange}
        />

        <input
          type="text"
          name="company"
          placeholder="Company"
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
        />

        <input
          type="text"
          name="salary"
          placeholder="Salary"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Job Description"
          onChange={handleChange}
        />

        <button className="submit-btn">
          Add Job
        </button>
      </form>
    </div>
  );
}

export default AddJob;
