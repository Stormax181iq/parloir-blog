import { useEffect, useRef, useState } from "react";

import MainButton from "../components/MainButton";
import CategoryButton from "../components/CategoryButton";
import PostCard from "../components/PostCard";

import homeImg from "../assets/homeWomanArt.png";

import apiService from "../api/apiService";
import useAuth from "../hooks/useAuth";

export default function Home() {
  const recentPostsPerPage = 3;
  const recentPostsPages = 3;
  const editorsChoicePostsCount = 3;
  const popularPostsCount = 3;
  const popularRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [editorsChoicePosts, setEditorsChoicePosts] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);
  const [currentRecentPostsPage, setCurrentRecentPostsPage] = useState(0);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await apiService.getPopularCategories();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    const fetchRecentPosts = async () => {
      try {
        const data = await apiService.getRecentPosts(
          recentPostsPerPage * recentPostsPages,
        );
        setRecentPosts(data);
      } catch (error) {
        console.error("Failed to fetch recent posts", error);
      }
    };

    const fetchEditorsChoicePosts = async () => {
      try {
        const data = await apiService.getEditorsChoicePosts(
          editorsChoicePostsCount,
        );
        setEditorsChoicePosts(data);
      } catch (error) {
        console.error("Failed to fetch editor’s choice posts", error);
      }
    };

    const fetchPopularPosts = async () => {
      try {
        const data = await apiService.getPopularPosts(popularPostsCount);
        setPopularPosts(data);
      } catch (error) {
        console.error("Failed to fetch popular posts", error);
      }
    };

    fetchCategories();
    fetchRecentPosts();
    fetchEditorsChoicePosts();
    fetchPopularPosts();
  }, []);

  function generateRecentPostsPagination() {
    const elements = [];
    for (let i = 0; i < recentPostsPages; i++) {
      if (i === currentRecentPostsPage && i === recentPostsPages - 1) {
        elements.push(<b>{i + 1}</b>);
      } else if (i === currentRecentPostsPage) {
        elements.push(
          <>
            <b>{i + 1}</b> -{" "}
          </>,
        );
      } else if (i === recentPostsPages - 1) {
        elements.push(<>{i + 1}</>);
      } else {
        elements.push(<>{i + 1} - </>);
      }
    }
    return elements;
  }

  return (
    <>
      <div className="relative flex h-[90vh] flex-row items-center overflow-clip px-[10vw]">
        <div className="ml-16">
          {isAuthenticated && (
            <h1 className="text-3xl">Hello {user.username}</h1>
          )}
          <h1 className="pb-14 font-h text-8xl">Let your stories shine.</h1>
          <p className="font-sans mb-14 text-2xl">
            Parloir helps others read, write, and deepen their understanding.
          </p>
          <MainButton
            onClick={() => {
              popularRef.current.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="font-sans rounded-full px-10 py-4 text-2xl"
          >
            Start reading
          </MainButton>
        </div>
        <img
          src={homeImg}
          alt="Women Day Flower Abstract Art"
          className="absolute -right-40 h-full object-cover"
        />
      </div>
      <div className="mx-[10vw] my-4 flex justify-stretch px-16">
        <div className="mr-4 w-3/4">
          <h1
            ref={popularRef}
            className="mb-4 scroll-mt-[10vh] font-h text-3xl"
          >
            Popular categories
          </h1>
          <div className="flex justify-between">
            {categories.map((category) => {
              return (
                <CategoryButton key={category.id} size="lg">
                  {category.name}
                </CategoryButton>
              );
            })}
          </div>
          <h1 className="my-4 font-h text-3xl">Recent posts</h1>
          <div className="mb-8 border-b border-main-black/10 pb-8 dark:border-main-white/40">
            {recentPosts.map((post, i) => {
              const startIndex = currentRecentPostsPage * recentPostsPerPage;
              const endIndex = startIndex + recentPostsPerPage;
              if (i >= startIndex && i < endIndex) {
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
              }
            })}
          </div>
          <div className="flex w-full items-center justify-between pt-4">
            <button
              onClick={() =>
                setCurrentRecentPostsPage(
                  Math.max(0, currentRecentPostsPage - 1),
                )
              }
              disabled={currentRecentPostsPage === 0}
              className="w-28 rounded-full bg-third p-2 text-main-white disabled:bg-gray-400"
            >
              Previous
            </button>
            <p>{generateRecentPostsPagination()}</p>
            <button
              onClick={() =>
                setCurrentRecentPostsPage(
                  Math.min(recentPostsPages - 1, currentRecentPostsPage + 1),
                )
              }
              disabled={currentRecentPostsPage === recentPostsPages - 1}
              className="disabled:bg-third:0.7 w-28 rounded-full bg-third p-2 text-main-white disabled:bg-gray-400"
            >
              Next
            </button>
          </div>
        </div>
        <div className="ml-8 border-l border-main-black pl-8 dark:border-main-white">
          <h1 className="mb-4 font-h text-3xl">Most popular</h1>
          {popularPosts.map((post) => {
            return (
              <PostCard
                key={post.id}
                postId={post.id}
                title={post.title}
                author={post.author}
                timeOfPublication={post.created_at}
                category={post.category}
                imgSrc={post.img_src}
                size="sm"
              />
            );
          })}

          <h1 className="my-4 font-h text-3xl">Editor’s choice</h1>
          {editorsChoicePosts.map((post) => {
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
                size="sm"
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
