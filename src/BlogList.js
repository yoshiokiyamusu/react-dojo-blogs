import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";

const BlogList = (props) => {
  console.log(props);
    const blogs = props.blogs;
    const title = props.title;
    
    return (
      <Table>
      <div className="blog-list">
        <h1>{title}</h1>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
          <h2>{ blog.title }</h2>
          <p>Body:{ blog.body }</p>
          <p>Written by { blog.author }</p>
          </Link> 


        </div>
      ))}
      </div>
      </Table>

      );
}
 
export default BlogList;