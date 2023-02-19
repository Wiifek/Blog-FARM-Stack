import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { BlogList } from "./components/blog/BlogList";
import { Footer } from "./components/footer/Footer";
import AddBlogForm from "./components/blog/AddBlogForm";
import BlogDetails from "./components/blog/BlogDetails";


function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route exact path="/" element={<BlogList />} />
          <Route exact path="/add-blog" element={<AddBlogForm />} />
          <Route exact path="/details/:blogId" element={<BlogDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
