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

      const err = await login(data.username, data.password);
      if (err) {
        setError(err);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      setError(error);
    }
  }

  return (
    <div className="m-8 mx-auto rounded-lg border border-main-black p-4 dark:border-main-white">
      <h1 className="text-center font-h text-3xl">Login</h1>
      {error && <p>Error occurred: {error}</p>}
      <form
        onSubmit={handleLoginSubmit}
        className="flex h-full flex-col items-center justify-around"
      >
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          className="mt-2 rounded-lg p-2 dark:text-main-black"
          autoFocus
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="mt-2 rounded-lg p-2 dark:text-main-black"
          autoComplete="off"
          required
        />
        <MainButton className="mt-2 p-2" type="submit">
          Access your account !
        </MainButton>
      </form>
    </div>
  );
}
