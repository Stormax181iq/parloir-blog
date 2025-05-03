const authService = {
  register: async (username, password) => {
    try {
      const response = await fetch(`/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const result = await response.json();
        console.error("Registration failed : ", result.error);
        return result.error;
      }
    } catch (error) {
      console.error("Error registering: ", error);
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
        const result = await response.json();
        console.error("Login failed : ", result.error);
        return result.error;
      }
    } catch (error) {
      console.error("Error logging in: ", error);
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
