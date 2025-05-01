const authService = {
  register: async (username, password) => {
    try {
      const response = await fetch(`/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      });

      if (!response.ok) {
        console.log("Registration failed", response.error);
        return response.error;
      }
    } catch (error) {
      console.error("error registering: ", error);
    }
  },
  login: async (username, password) => {
    try {
      const response = await fetch(`/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        console.log("Login failed", response.error);
        return response.error;
      }
    } catch (error) {
      console.error("error logging in: ", error);
      return error;
    }
  },
  checkAuth: async () => {
    const response = await fetch("/api/auth/check", {
      method: "GET",
      credentials: "include",
    });

    if (response.ok) {
      const userData = await response.json();
      return userData;
    } else {
      return { user: null };
    }
  },
  logout: async () => {
    return await fetch("/api/auth/logout");
  },
};

export default authService;
