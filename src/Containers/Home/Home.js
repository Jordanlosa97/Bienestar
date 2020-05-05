import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Navbar, Nav,NavDropdown, Button, Modal, Form} from 'react-bootstrap';
import './Home.css';
import useStyles from './HomeStyles.js'



function Home() {
  const classes = useStyles();
  const [smShow, setSmShow] = useState(false);
  return (
  <Navbar className={classes.root} bg="light" expand="lg">
    <Navbar.Brand className={classes.tituloNav} color="blue" href="#home">B-Sabana</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav.Link className={classes.navItem} color="red" href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <Nav.Link className="mr-sm-2">Home</Nav.Link>
      <Button className={classes.buttonLogin} variant="primary" onClick={() => setSmShow(true)}>Ingresar</Button>{' '}
      </Navbar.Collapse>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
  </Navbar>
  
  );
}

export default Home;
