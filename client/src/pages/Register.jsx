import { useNavigate } from "react-router-dom";
import apiService from "../api/apiService";
import MainButton from "../components/MainButton";
import { useState } from "react";

export default function Register() {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  async function handleRegisterSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const err = await apiService.register(data.username, data.password);
    if (err) {
      console.error(err);
      setError(err);
    } else {
      setError(false);
      navigate("/login");
    }
  }
  return (
    <>
      <h1>Register</h1>
      {error && <p>Error occurred: {error}</p>}
      <form onSubmit={handleRegisterSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <MainButton className="p-2" type="submit">
          Create your account !
        </MainButton>
      </form>
    </>
  );
}
