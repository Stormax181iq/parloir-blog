const apiService = {
  getPopularCategories: async () => {
    const response = await fetch(`/api/categories?sort=popular`);

    const data = await response.json();
    return data;
  },
  getRecentPosts: async (limit = null) => {
    const response = await fetch(
      `/api/posts?filter=recent${limit ? "&limit=" + limit : ""}`,
    );

    const data = await response.json();
    return data;
  },
  getUsernameById: async (id) => {
    const response = await fetch(`/api/users/${encodeURIComponent(id)}`);

    const data = await response.json();
    return data.username;
  },
  getCategoryNameById: async (id) => {
    const response = await fetch(`/api/categories/${encodeURIComponent(id)}`);

    const data = await response.json();
    return data.name;
  },
  getEditorsChoicePosts: async (limit = null) => {
    const response = await fetch(
      `/api/posts?filter=editors${limit ? "&limit=" + limit : ""}`,
    );

    const data = await response.json();
    return data;
  },
  getPopularPosts: async (limit = null) => {
    const response = await fetch(
      `/api/posts?filter=popular${limit ? "&limit=" + limit : ""}`,
    );

    const data = await response.json();
    return data;
  },
};

export default apiService;
