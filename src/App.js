import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>
     <Form>
     
      <Form.Control placeholder="First name" />
    
      <Form.Control placeholder="Last name" />
    
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else                                                                                                             
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label> select</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label> multiple select</Form.Label>
    <Form.Control as="select" multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label> textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Example file input" />
  </Form.Group>
  <Form.Group controlId="formBasicRange">
    <Form.Label>Range</Form.Label>
    <Form.Control type="range" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
     
    </div>
   
  );
}

export default App;