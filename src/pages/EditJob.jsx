
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function EditJob() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    category: "",
    salary: "",
    description: ""
  });

  useEffect(() => {
    getJob();
  }, [id]);

  async function getJob() {
    try {
      const response = await api.get(`/jobs/${id}`);

      setFormData({
        title: response.data.title || "",
        company: response.data.company || "",
        location: response.data.location || "",
        category: response.data.category || "",
        salary: response.data.salary || "",
        description: response.data.description || ""
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.put(
        `/jobs/${id}`,
        formData
      );

      navigate("/jobs");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />

        <input
          type="text"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <button className="submit-btn">
          Update Job
        </button>

      </form>
    </div>
  );
}

export default EditJob;
