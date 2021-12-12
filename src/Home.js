import { useState, useEffect } from 'react';
import Api from './api_test.js';
import BlogList from './BlogList.js';
import useFetch from './useFetch';


const Home = () => {
  const {data, isPending, error} = useFetch('https://back-api-yk.herokuapp.com/blogs');
  var obj_blogs;

  const [name, setName] = useState('Yoshio');
  const [age, setAge] = useState(32);

  const changevals = (name) => {
    //setName('Kiyamu');
    if (name == 'Kiyamu') {setName('Yoshio');} else {setName('Kiyamu');} 
    setAge(30);
  }

  const handleClick = (e) => {
    console.log('hello ninjas', e);
  }

  const handleClickAgain = (name, e) => {
    console.log('hello ' + name, e.target);
  }
  const clickname = (name) => {
    console.log('hello ' + name);
  }

    return (
      <div className="home">
        <h2>Homepage</h2>
        <p>user: {name} is {age} years old</p>

        
        <button value={name} onClick={() => changevals(name)}>{name}</button>
        <button onClick={() => clickname('yoshio')}>Click me yoshio</button>
        <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
      {/*
          {blogs.map(blog => (
            <div className="blog-preview" key={blog.id} >    
              <h2>{ blog.title }</h2>
              <p>Written by { blog.author }</p>
            </div>
          ))}
      */}    
         {/* <Api /> */}
         
         {error && <div>{error}</div>} 
         {isPending && <div>Loading...</div>} 
         {data && <BlogList blogs={data} title="All blogs titulo" />}
         
     </div>
    );
}
   
export default Home;