
import { useState } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.get(
        `/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
      );

      if (response.data.length > 0) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data[0])
        );

        alert("Login successful!");

        navigate("/");
        window.location.reload();
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
      alert("Login failed. Please try again.");
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2>Recruitment Management System</h2>
        <h3>Login</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="submit-btn">
            Login
          </button>
        </form>

        <p>
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
