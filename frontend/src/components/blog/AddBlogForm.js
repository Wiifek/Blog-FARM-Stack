import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBlog = {
      id: Date. now(),
      title,
      content,
      author,
      upvotes: 0,
      downvotes: 0,
    };
    navigate("/", {
      state: newBlog,
  });

    // axios
    //   .post("/api/blogs", newBlog)
    //   .then((res) => {
    //     console.log(res.data);
    //     window.location = "/";
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Content:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <div>
        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <button type="submit" className="addBlog">Submit</button>
    </form>
  );
}

export default AddBlogForm;
