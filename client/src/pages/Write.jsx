import { useState } from "react";
import MainButton from "../components/MainButton";

export default function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="mx-[25vh] my-2">
      <h1 className="font-h mt-8 mb-4 text-center text-3xl">
        Share your thoughts by writing a brand new post !
      </h1>
      <form className="flex flex-col justify-between" onSubmit={handleSubmit}>
        <input
          className="bg-main-white dark:text-main-black my-2 rounded-2xl p-2"
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
            setTitle(e.value);
          }}
        />

        <textarea
          className="bg-main-white dark:text-main-black my-2 field-sizing-content max-w-full resize-y rounded-2xl p-2"
          name="content"
          id="content"
          placeholder="Here goes the content of your post! Markdown is enabled"
          required
          rows={10}
          autoComplete="off"
          value={content}
          onChange={(e) => {
            setContent(e.value);
          }}
        ></textarea>
        <MainButton type="submit" className="mt-2 mb-4 w-1/6 p-2">
          Publish
        </MainButton>
      </form>
    </div>
  );
}
