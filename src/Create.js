import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useHistory } from "react-router-dom";



const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isUploading, setisUploading] = useState(false); /*Mensaje de loading*/
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setisUploading(true);
        const blog = { title, body, author };
    
        fetch('https://back-api-yk.herokuapp.com/blogs', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blog)
        }).then(() => {
          console.log('new blog added');
          setisUploading(false);
          history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Blog title:</Form.Label>
                    <Form.Control  type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

                    <Form.Label>Blog body:</Form.Label>
                    <Form.Control type="textarea" required value={body} onChange={(e) => setBody(e.target.value)} ></Form.Control>

                    <Form.Label>Blog author:</Form.Label>
                    <Form.Select value={author} onChange={(e) => setAuthor(e.target.value)} >
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>
                    </Form.Select>
                </Form.Group>
                {!isUploading &&<button variant="secondary">Add Blog</button> }
                {isUploading && <button disabled>Adding Blog</button>}      
            </Form>
        </div>
    );
}
   
export default Create;