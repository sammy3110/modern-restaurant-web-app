import React from "react";
import { BiLike, BiCommentDots, BiShareAlt } from 'react-icons/bi'

const BlogItem = ({blog}) => {
  return (
    <div className="blog-item-container">
      <img src={"images/blog/blog-item-image" + blog.id + ".png"} alt="blog-item-image" />
      <div className="blog-item-info">
        <p>{blog.date}</p>
        <h3>{blog.title}</h3>
        <div className="blog-item-info-bottom">
          <a href="#"><strong>Learn More</strong></a>
          <div className="blog-item-icons">
            <BiLike className="blog-icon" size={17} />
            <BiCommentDots className="blog-icon" size={17} />
            <BiShareAlt className="blog-icon" size={17} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
