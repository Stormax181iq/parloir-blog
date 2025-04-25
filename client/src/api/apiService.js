const API_URL = "http://127.0.0.1:5000/api";

const apiService = {
  getPopularCategories: async () => {
    const response = await fetch(`${API_URL}/categories?sort=popular`);

    const data = await response.json();
    return data;
  },
  getRecentPosts: async (limit = null) => {
    const response = await fetch(
      `${API_URL}/posts?filter=recent${limit ? "&limit=" + limit : ""}`,
    );

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
  getEditorsChoicePosts: async (limit = null) => {
    const response = await fetch(
      `${API_URL}/posts?filter=editors${limit ? "&limit=" + limit : ""}`,
    );

    const data = await response.json();
    return data;
  },
  getPopularPosts: async (limit = null) => {
    const response = await fetch(
      `${API_URL}/posts?filter=popular${limit ? "&limit=" + limit : ""}`,
    );

    const data = await response.json();
    return data;
  },
};

export default apiService;
