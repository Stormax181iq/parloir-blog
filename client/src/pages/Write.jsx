import { useEffect, useState } from "react";
import MainButton from "../components/MainButton";
import apiService from "../api/apiService";

import MDEditor from "@uiw/react-md-editor";
import { useNavigate } from "react-router-dom";

export default function Write() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    await apiService.createPost(title, content, category);

    navigate("/");
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    } else {
      setImagePreview(null);
    }
  }

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await apiService.getPopularCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);
  return (
    <div className="mx-[25vh] my-2">
      <h1 className="font-h mt-8 mb-4 text-center text-3xl">
        Share your thoughts by writing a brand new post !
      </h1>
      <form className="flex flex-col justify-between" onSubmit={handleSubmit}>
        <input
          className="bg-main-white dark:bg-main-black my-2 rounded-2xl p-2 dark:border"
          type="text"
          name="title"
          id="title"
          autoComplete="off"
          placeholder="A wonderful title!"
          minLength={4}
          maxLength={255}
          autoFocus
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <MDEditor
          className="bg-main-white dark:bg-main-black my-2 field-sizing-content resize-y rounded-2xl p-2 dark:border"
          name="content"
          id="content"
          placeholder="Here goes the content of your post! Markdown is enabled"
          required
          rows={10}
          autoComplete="off"
          value={content}
          onChange={setContent}
        />
        <div className="flex items-center justify-around">
          <select
            className="bg-main-white dark:bg-main-black w-1/6 rounded-2xl p-2 hover:cursor-pointer dark:border"
            name="category"
            id="category"
            value={category.name}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">--Choose a category--</option>
            {categories ? (
              categories.map((category) => {
                return (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                );
              })
            ) : (
              <p>Loading categories…</p>
            )}
          </select>
          <input
            className="bg-main-white file:bg-third dark:bg-main-black rounded-2xl p-2 file:mr-4 file:cursor-pointer file:rounded-2xl file:p-2 dark:border"
            type="file"
            name="thumbnail"
            id="thumbnail"
            accept="image/*"
            onChange={handleFileChange}
          />
          <MainButton type="submit" className="mt-2 mb-4 w-1/6 p-2">
            Publish
          </MainButton>
        </div>
        <div className="flex justify-center">
          {imagePreview && (
            <div className="flex flex-col items-center">
              <p className="w-1/2 text-center">
                This preview is just for demonstration purposes. Image won’t be
                loaded to the server to avoid data complexity. Instead, a random
                asset from picsum.photos will be picked.
              </p>
              <img
                className=""
                src={imagePreview}
                alt={selectedFile}
                width={400}
              />
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
