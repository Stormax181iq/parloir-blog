import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import apiService from "../api/apiService";

import PostCard from "./PostCard";

export default function CategoryPage() {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await apiService.getPostsByCategory(category);
      setPosts(data);
    };

    fetchPosts();
  }, [category]);
  return (
    <div className="mx-[25vh]">
      <h1 className="mb-4 mt-8 font-h text-3xl">
        Posts for category {category}
      </h1>
      <div>
        {posts ? (
          posts.map((post) => {
            return (
              <PostCard
                key={post.id}
                postId={post.id}
                title={post.title}
                content={post.content}
                author={post.author}
                timeOfPublication={post.created_at}
                category={post.category}
                imgSrc={post.img_src}
              />
            );
          })
        ) : (
          <p>Loading posts</p>
        )}
      </div>
    </div>
  );
}
