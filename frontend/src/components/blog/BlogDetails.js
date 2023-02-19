import React, { useState, useEffect } from "react";
import axios from "axios";
import { blogs } from "../../assets/data/data"
import { useParams } from "react-router-dom";

function BlogDetails() {
    const [blog, setBlog] = useState(null);
    let { blogId } = useParams();
    //If we are getting the blog from the database
    /*   useEffect(() => {
         axios
           .get(`/api/blogs/${blogId`)
           .then((res) => {
             setBlog(res.data);
           })
           .catch((err) => {
             console.log(err);
           });
       }, []);
       **/
    useEffect(() => {
        let blogFound = blogs.find(({ id }) => id === parseInt(blogId))
        if (blogFound) {
            setBlog(blogFound)
        }
    }, [])


    return (
        <div>
            {blog &&
                <>
                    <h2>Full Content:</h2>
                    <p>{blog.content}</p>
                </>
            }
        </div>
    );
}

export default BlogDetails;
