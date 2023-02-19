import React, { useState } from 'react'
import { BlogCard } from './BlogCard'
import { blogs } from '../../assets/data/data'
import { useLocation } from 'react-router-dom';

export const BlogList = () => {
    const location = useLocation();

    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    //If we are retrieving data from database
    /* useEffect(() => {
         axios
           .get("/api/blogs")
           .then((res) => {
             setBlogs(res.data);
           })
           .catch((err) => {
             console.log(err);
           });
       }, []);
       **/

    const filteredBlogs = blogs.filter(
        (blog) =>
            blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <section className='blog'>
            <input
                type="text"
                className='search'
                placeholder="Search blogs"
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className='container grid3'>
                {filteredBlogs.map((blog, index) => (
                    <BlogCard blog={blog} key={index} />
                ))}
            </div>
        </section>
    )
}