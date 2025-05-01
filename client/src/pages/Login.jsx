import { useState } from "react";
import MainButton from "../components/MainButton";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  async function handleLoginSubmit(event) {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries());

      const success = await login(data.username, data.password);
      if (success) {
        navigate("/");
      } else {
        setError("Login failed");
      }
    } catch (error) {
      console.error(error);
      setError(error);
    }
  }

  return (
    <>
      <h1>Login</h1>
      {error && <p>Error occurred: {error}</p>}
      <form onSubmit={handleLoginSubmit}>
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
          Access your account !
        </MainButton>
      </form>
    </>
  );
}
