import { useState, useEffect } from 'react';

const useFetch = (url) => {
   const [data, setData] = useState(null);
   const [isPending, setisPending] = useState(true); /*Mensaje de loading*/
   const [error, setError] = useState(null);


  /*Se ejecuta cada vez q se renderiza el objeto blogs, second argument [] para correrlo 1 sola vez (initial render only)*/
  /*Cada vez que los objets 'name' y 'blogs' cambie ejecuta useEffect */
  useEffect(()=>{
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal }) //https://back-api-yk.herokuapp.com/blogs //http://localhost:3320/blogs //https://back-api-yk.herokuapp.com/blogs/3
    .then(res => {
      //console.log(res);
      if(!res.ok){throw Error('Could not fetch');}
      return res.json();
    })
    .then(data => { 
      setData(data); 
      //console.log(data); 
      setisPending(false);
      setError(null); })
    .catch(err => {
      if (err.name === 'AbortError') {
        console.log('fetch aborted')
      } else {
      setError(err.message);
      setisPending(false);
      }
    })     
    // abort the fetch
    return () => abortCont.abort();

  },[url]); /* whenever url changes the function runs*/

  return {data, isPending, error}
}

export default useFetch;