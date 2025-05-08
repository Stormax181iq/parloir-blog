import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import apiService from "../api/apiService";
import PostCard from "./PostCard";

export default function UserPage() {
  const { username, postId } = useParams();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await apiService.getUserInfos(username);
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    const fetchUserPosts = async () => {
      try {
        const data = await apiService.getPostsByUser(user.id);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts data for this user: ", error);
      }
    };

    fetchUserData();
    user.id && fetchUserPosts();
  }, [username, user.id]);

  if (postId) {
    return <Outlet />;
  }

  return (
    <div className="m-8 mx-auto h-full w-full">
      <div className="flex items-center justify-center">
        <img
          className="mx-2 rounded-full"
          src={user.profilePicSrc}
          alt={"Profile picture of " + user.username}
          width={100}
          height={100}
        />
        <h1 className="mx-2 font-h text-3xl">{user.username}</h1>
      </div>
      <p className="mx-auto my-8 border-b border-main-black pb-4 text-center dark:border-main-white">
        {user.description}
      </p>

      <div>
        <h2 className="mx-auto mb-16 text-center font-h text-2xl">
          All posts from {user.username}
        </h2>
        {posts ? (
          posts.map((post) => {
            return (
              <div key={post.id} className="mx-auto my-4 max-w-screen-lg">
                <PostCard
                  postId={post.id}
                  title={post.title}
                  content={post.content}
                  author={user.username}
                  timeOfPublication={post.created_at}
                  category={post.category}
                  imgSrc={post.img_src}
                  showAuthor={false}
                />
              </div>
            );
          })
        ) : (
          <p>Loading posts…</p>
        )}
      </div>
    </div>
  );
}
