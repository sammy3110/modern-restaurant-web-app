import React from "react";
import { Title } from "../components/styled/Title.styled";
import BlogItem from "./BlogItem";

const Blogs = () => {
    const blogs = [
        {
            id: '1',
            date: '10 February 2022',
            title: 'Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis',
        },
        {
            id: '2',
            date: '23 November 2022',
            title: 'Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A',
        },
        {
            id: '3',
            date: '31 October 2022',
            title: 'Curabitur rutrum velit ac congue malesuada Risuda',
        },
    ]
  return (
    <div id="blog" className="blogs-container">
      <Title className="title" align="center">
        <h2>Blog Post</h2>
        <h1>
          <span>La</span>test News &amp; Blog
        </h1>
      </Title>
      <div className="blog-list">
        {blogs.map(blog => {return <BlogItem key={blog.id} blog={blog} />})}
      </div>
    </div>
  );
};

export default Blogs;
