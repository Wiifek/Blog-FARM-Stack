import React, { useState } from "react"
import "./blog.css"
import { AiTwotoneEdit, AiOutlineClockCircle } from "react-icons/ai"
import { BiUpvote, BiDownvote } from "react-icons/bi"
import { Link } from "react-router-dom"
import axios from "axios"

export const BlogCard = ({ blog }) => {
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);
  const handleUpvote = () => {
    if (up) blog.upvotes--;
    else {
      blog.upvotes++;
      if(down){
        setDown(false);
        blog.downvotes--;
      }
    }
    setUp(!up);
    /*
    axios
      .put(`/api/blogs/${blog._id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      **/
  };

  const handleDownvote = () => {
    if (down) blog.downvotes--;
    else {
      blog.downvotes++;
      if(up){
        setUp(false);
        blog.upvotes--;
      }
    }
    setDown(!down);
    /*axios
      .put(`/api/blogs/${blog._id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      **/
  };
  const blogStyle = {
    border: `3px solid ${blog.upvotes >= blog.downvotes ? "green" : "red"}`,
    padding: "1rem",
    marginBottom: "1rem",
  };
  return (
    <div className='box boxItem' style={blogStyle} key={blog.id}>
      <div className='img'>
        <img src={blog.cover} alt='' />
      </div>
      <div className='details'>
        <h3>{blog.title}</h3>
        <AiTwotoneEdit className="icon" /> <label htmlFor=''>{blog.author}</label>
        <p>{blog.content.slice(0, 180)}...
          <Link to={`/details/${blog.id}`} className='link'>
            <span>Continue reading</span>
          </Link>
        </p>
        <div className="footer">
          <div className='date'>
            <AiOutlineClockCircle className='icon' /> <label>{blog.date}</label>
          </div>
          <div className="vote">
            <div><BiUpvote className='icon' style={up ? { fill: "green" } : { fill: "black" }} onClick={handleUpvote} /> <label>{blog.upvotes}</label></div>
            <div><BiDownvote className='icon' style={down ? { fill: "red" } : { fill: "black" }} onClick={handleDownvote}/> <label>{blog.downvotes}</label></div>
          </div>
        </div>
      </div>
    </div>
  )
}
