import { useState } from "react";
import MainButton from "../components/MainButton";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useAuth();

  async function handleLoginSubmit(event) {
    try {
      event.preventDefault();

      const err = await login(username, password);
      if (err) {
        setError(err);
      } else {
        const from = location.state?.from ?? "/";
        navigate(from, { replace: true });
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-2 rounded-lg p-2 dark:text-main-black"
          autoFocus
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
