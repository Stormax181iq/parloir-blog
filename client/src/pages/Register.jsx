import { useNavigate } from "react-router-dom";
import authService from "../api/authService";
import MainButton from "../components/MainButton";
import { useState } from "react";

export default function Register() {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  async function handleRegisterSubmit(event) {
    event.preventDefault();
    const err = await authService.register(username, password, passwordConfirm);
    if (err) {
      setError(err);
    } else {
      setError(false);
      navigate("/login");
    }
  }
  return (
    <div className="dark:border-main-whit m-8 mx-auto rounded-lg border border-main-black p-4">
      <h1 className="text-center font-h text-3xl">Register</h1>
      {error && <p>Error occurred: {error}</p>}
      <form
        onSubmit={handleRegisterSubmit}
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
        <input
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          placeholder="Confirm your password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          className="mt-2 rounded-lg p-2 dark:text-main-black"
          autoComplete="off"
          required
        />
        <MainButton className="mt-2 p-2" type="submit">
          Create your account !
        </MainButton>
      </form>
    </div>
  );
}
