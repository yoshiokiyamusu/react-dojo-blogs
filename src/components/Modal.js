import { Modal, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";


function Modale(props) {

  const { id } = useParams();//URL
  const history = useHistory();
  
  const handleDelete = ()=>{
    fetch('https://back-api-yk.herokuapp.com/blogs/' + id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })
  }

  return (
<Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>{props.text}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={props.onClose}>Close</Button>
    <Button variant="primary"  onClick={handleDelete}>Delete</Button>
  </Modal.Footer>
</Modal.Dialog>
  )
}

export default Modale;

