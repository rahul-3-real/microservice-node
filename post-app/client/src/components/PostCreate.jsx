import axios from "axios";
import { useState } from "react";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/posts", {
        title,
        content,
      });

      console.log(response.data);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="max-w-sm mx-auto pt-5" onSubmit={onSubmitHandler}>
      <h1 className="text-2xl text-white font-bold mb-5">Create Post</h1>

      <div className="mb-5">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="content"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Content
        </label>
        <textarea
          name="content"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Create
      </button>
    </form>
  );
};

export default PostCreate;
