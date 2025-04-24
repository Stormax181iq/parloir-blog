const API_URL = "http://127.0.0.1:5000/api";

const apiService = {
  getPopularCategories: async () => {
    const response = await fetch(`${API_URL}/categories?sort=popular`);

    const data = await response.json();
    return data;
  },
  getRecentPosts: async () => {
    const response = await fetch(`${API_URL}/posts/recent`);

    const data = await response.json();
    return data;
  },
  getUsernameById: async (id) => {
    const response = await fetch(`${API_URL}/users/${encodeURIComponent(id)}`);

    const data = await response.json();
    return data.username;
  },
  getCategoryNameById: async (id) => {
    const response = await fetch(
      `${API_URL}/categories/${encodeURIComponent(id)}`,
    );

    const data = await response.json();
    return data.name;
  },
};

export default apiService;
