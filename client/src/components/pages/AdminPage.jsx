import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container'
import Offcanvas from 'react-bootstrap/Offcanvas';
import APForm from '../ui/APForm';
import APSelect from '../ui/APSelect';

export default function AdminPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container style={{display:"flex"}}>
      <Button variant="primary" onClick={handleShow}>
        Добавление
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Добавление</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <APForm />
        </Offcanvas.Body>
      </Offcanvas>
      <APSelect />
    </Container>
  
  )
}
