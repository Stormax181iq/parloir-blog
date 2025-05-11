import CategoryButton from "./CategoryButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp as faThumbsUpSolid } from "@fortawesome/free-solid-svg-icons";
import MainButton from "./MainButton";
import { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import apiService from "../api/apiService";
import formatDate from "../helpers/formatDate";
import PostCard from "./PostCard";
import useAuth from "../hooks/useAuth";
import MDEditor from "@uiw/react-md-editor";
import ThemeContext from "../context/ThemeContext";

export default function PostPage() {
  const MAX_NUMBER_OF_POSTS = 4;
  const { username, postId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuthenticated } = useAuth();
  const theme = useContext(ThemeContext);
  console.log(theme);

  const [post, setPost] = useState({});
  const [author, setAuthor] = useState({});
  const [authorPosts, setAuthorPosts] = useState([]);
  const [liked, setLiked] = useState(false);

  const publicationTime = formatDate(new Date(post.createdAt));

  useEffect(() => {
    const fetchPost = async () => {
      const data = await apiService.getPostByUserAndId(username, postId);

      setPost(data);
    };

    const fetchAuthor = async () => {
      const data = await apiService.getUserInfos(username);

      setAuthor(data);
    };

    const fetchUserPosts = async () => {
      const data = await apiService.getPostsByUser(username);

      setAuthorPosts(data.slice(0, MAX_NUMBER_OF_POSTS));
    };

    const fetchLiked = async () => {
      const data = await apiService.hasLikedPost(username, postId);

      setLiked(data);
    };

    fetchPost();
    fetchAuthor();
    fetchUserPosts();

    isAuthenticated && fetchLiked();
  }, [username, postId, isAuthenticated]);

  async function handleLike() {
    if (isAuthenticated) {
      setPost({ ...post, likes: post.likes + (liked ? -1 : 1) });
      setLiked(!liked);
      await apiService.likePost(author, postId);
    } else {
      navigate("/login", { state: { from: location.pathname } });
    }
  }

  return (
    <>
      <div className="border-main-black dark:border-main-white mx-[20vw] mt-8 border-l pl-4">
        <div className="flex w-full justify-between">
          <div className="flex w-full flex-col justify-between">
            <div className="flex h-full w-full flex-col justify-between">
              <h1 className="font-h mb-8 pr-4 text-5xl">{post.title}</h1>
              <div className="flex items-center">
                <img
                  src={author.profilePicSrc}
                  alt={"profile picture of " + author.username}
                  className="my-2 mr-2 h-16 w-16 rounded-full"
                />
                <div className="mx-2 flex flex-col">
                  <div className="flex items-center">
                    <Link
                      to={`/users/${author.username}`}
                      className="text-3xl underline"
                    >
                      {author.username}
                    </Link>
                  </div>
                  <p>{publicationTime}</p>
                </div>
              </div>
            </div>
            <div className="border-main-black dark:border-main-white mb-2 flex w-full items-center justify-between border-y px-4 py-4">
              <div className="flex w-1/3 items-center justify-between">
                <button
                  onClick={handleLike}
                  className="flex"
                  title="Like this post"
                >
                  <FontAwesomeIcon
                    icon={liked ? faThumbsUpSolid : faThumbsUp}
                    className="text-2xl"
                  />
                  <p className="ml-1">{post.likes}</p>
                </button>
              </div>
            </div>
          </div>
          <img
            src={post.imgSrc}
            alt="post’s thumbnail"
            className="rounded-xl"
            width={500}
            height={300}
          />
        </div>
        <div
          data-color-mode={theme === "light" ? "light" : "dark"}
          className="border-main-black dark:border-main-white w-5/6 border-r border-b py-4 pr-4 pb-4"
        >
          <MDEditor.Markdown className="p-2" source={post.content} />
        </div>
        <div className="border-main-black dark:border-main-white flex h-36 w-5/6 flex-col justify-between border-r px-4 py-8">
          <div className="flex items-center">
            {post.category ? (
              <div className="mr-8" key={post.category}>
                <CategoryButton size="lg">{post.category}</CategoryButton>
              </div>
            ) : (
              <p>Loading category…</p>
            )}
          </div>
          <div className="my-4 mb-2 flex w-full items-center px-4 py-4">
            <div className="flex w-1/4 items-center justify-between">
              <button
                onClick={handleLike}
                className="flex"
                title="Like this post"
              >
                <FontAwesomeIcon
                  icon={liked ? faThumbsUpSolid : faThumbsUp}
                  className="text-2xl"
                />
                <p className="ml-1">{post.likes}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-main-black dark:border-main-white mb-8 flex border-t px-[10vw] py-4">
        <div className="border-main-black dark:border-main-white w-1/3 border-r pr-4">
          <div>
            <img
              src={author.profilePicSrc}
              alt={author.username}
              className="h-16 w-16 rounded-full"
            />
            <div className="flex items-start">
              <div>
                <p className="font-h mt-2 text-4xl">
                  Written by{" "}
                  <Link to={`/users/${author.username}`} className="underline">
                    {author.username}
                  </Link>
                </p>
                <p>{author.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-8">
          <h2 className="font-h mt-4 mb-2 text-3xl">
            More from {author.username}
          </h2>
          <div className="mr-36 mb-8 grid grid-cols-2 grid-rows-2 gap-12">
            {authorPosts ? (
              authorPosts.map((authorPost) => {
                return (
                  <PostCard
                    key={authorPost.id}
                    postId={authorPost.id}
                    title={authorPost.title}
                    content={authorPost.content}
                    author={username}
                    timeOfPublication={authorPost.created_at}
                    category={authorPost.category}
                    imgSrc={authorPost.img_src}
                    imgTop={true}
                  />
                );
              })
            ) : (
              <p>Loading posts</p>
            )}
          </div>
          <MainButton
            isLink={true}
            link={`/users/${author.username}`}
            className="px-2 py-4"
          >
            See all from {author.username}
          </MainButton>
        </div>
      </div>
    </>
  );
}
