import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import useFetch from './useFetch';
import BlogList from './BlogList.js';
import { useHistory } from "react-router-dom";
import Modal from './components/Modal';

const BlogDetails = () => {
  const { id } = useParams();//URL
  const {data : blog, isPending, error} = useFetch('https://back-api-yk.herokuapp.com/blogs/' + id);
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = ()=>{
    fetch('https://back-api-yk.herokuapp.com/blogs/' + id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })
  }

  function showModalHandler() {
    console.log('show ModalHandler');
    setShowModal(true);
  }
  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>} 
      {error && <div>{error}</div>} 
    
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button  onClick={showModalHandler}>Delete</button>
          {showModal && <Modal text='Are you sure?' onClose={closeModalHandler} />}
        </article>
      )}
      
    </div>
  );
}
 
export default BlogDetails;