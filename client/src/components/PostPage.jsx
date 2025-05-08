import CategoryButton from "./CategoryButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faThumbsUp,
  faComment,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import {
  faShareNodes,
  faThumbsUp as faThumbsUpSolid,
} from "@fortawesome/free-solid-svg-icons";
import MainButton from "./MainButton";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import apiService from "../api/apiService";
import formatDate from "../helpers/formatDate";
import PostCard from "./PostCard";
import useAuth from "../hooks/useAuth";

library.add(faThumbsUp, faComment);

export default function PostPage() {
  const MAX_NUMBER_OF_POSTS = 4;
  const { username, postId } = useParams();

  const { isAuthenticated } = useAuth();

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
    setLiked(!liked);
    await apiService.likePost(author, postId);
  }

  return (
    <>
      <div className="mx-[20vw] mt-8 border-l border-main-black pl-4">
        <div className="flex w-full justify-between">
          <div className="flex w-full flex-col justify-between">
            <div className="flex h-full w-full flex-col justify-between">
              <h1 className="mb-8 pr-4 font-h text-5xl">{post.title}</h1>
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
            <div className="mb-2 flex w-full items-center justify-between border-y border-main-black px-4 py-4">
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
              <div className="flex w-1/6 justify-between">
                <button title="Save this post to your list of favorites">
                  <FontAwesomeIcon icon={faBookmark} className="text-2xl" />
                </button>
                <button title="Share this post">
                  <FontAwesomeIcon icon={faShareNodes} className="text-2xl" />
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
        <div className="w-5/6 border-b border-r border-main-black py-4 pb-4 pr-4">
          <p>{post.content}</p>
        </div>
        <div className="flex h-36 w-5/6 flex-col justify-between border-r border-main-black px-4 py-8">
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

              <button title="Save this post to your list of favorites">
                <FontAwesomeIcon icon={faBookmark} className="text-2xl" />
              </button>
              <button title="Share this post">
                <FontAwesomeIcon icon={faShareNodes} className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8 flex border-t border-main-black px-[10vw] py-4">
        <div className="w-1/3 border-r border-main-black pr-4">
          <div>
            <img
              src={author.profilePicSrc}
              alt={author.username}
              className="h-16 w-16 rounded-full"
            />
            <div className="flex items-start">
              <div>
                <p className="mt-2 font-h text-4xl">
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
          <h2 className="mb-2 mt-4 font-h text-3xl">
            More from {author.username}
          </h2>
          <div className="mb-8 mr-36 grid grid-cols-2 grid-rows-2 gap-12">
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
