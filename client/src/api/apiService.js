const apiService = {
  getPopularCategories: async () => {
    const response = await fetch(`/api/categories?sort=popular`);

    const data = await response.json();
    return data;
  },
  getRecentPosts: async (limit = null) => {
    const response = await fetch(
      `/api/posts?sort=recent${limit ? "&limit=" + limit : ""}`,
    );

    const data = await response.json();
    return data;
  },
  getUsernameById: async (id) => {
    const response = await fetch(
      `/api/users/${encodeURIComponent(id)}?filter=username`,
    );

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
      `/api/posts?sort=popular${limit ? "&limit=" + limit : ""}`,
    );

    const data = await response.json();
    return data;
  },
  getUserIdByName: async (username) => {
    const response = await fetch(
      `/api/users/${encodeURIComponent(username)}?filter=id`,
    );

    const data = await response.json();
    return data;
  },
  getPostsByUser: async (userKey) => {
    const response = await fetch(
      `/api/users/${encodeURIComponent(userKey.toString())}/posts`,
    );

    const data = await response.json();
    return data;
  },
  getPostByUserAndId: async (username, postId) => {
    const response = await fetch(
      `/api/users/${encodeURIComponent(username)}/posts/${encodeURIComponent(postId)}`,
    );

    const data = await response.json();
    return {
      id: data.id,
      username: data.username,
      title: data.title,
      content: data.content,
      createdAt: data.created_at,
      category: data.category,
      imgSrc: data.img_src,
      likes: data.likes,
    };
  },
  getUserInfos: async (userKey) => {
    const response = await fetch(`/api/users/${encodeURIComponent(userKey)}`);

    const data = await response.json();
    return {
      id: data.id,
      username: data.username,
      description: data.description,
      profilePicSrc: data.profile_pic_src,
    };
  },
  hasLikedPost: async (author, postId) => {
    const response = await fetch(
      `/api/users/${encodeURIComponent(author)}/posts/${encodeURIComponent(postId)}/liked`,
    );

    const data = await response.json();
    return data.hasLiked;
  },
  likePost: async (author, postId) => {
    await fetch(
      `/api/users/${encodeURIComponent(author)}/posts/${encodeURIComponent(postId)}/toggle-like`,
      {
        method: "POST",
      },
    );
  },
  getPostsByCategory: async (category, limit = null) => {
    const response = await fetch(
      `/api/posts?category=${encodeURIComponent(category)}${limit ? "&limit=" + encodeURIComponent(limit) : ""}`,
    );

    const data = await response.json();
    return data;
  },
  createPost: async (title, content, category = null) => {
    await fetch(`/api/write/publish`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, category }),
    });
  },
};

export default apiService;
