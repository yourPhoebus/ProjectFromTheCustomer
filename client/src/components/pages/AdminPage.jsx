import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Col, Row, Stack } from 'react-bootstrap';
import axios from 'axios';
import APForm from '../ui/APForm';
import APSelect from '../ui/APSelect';
import TeaCard from '../ui/TeaCard';

export default function AdminPage() {
  const [show, setShow] = useState(false);
  const [teas, setTeas] = useState([]);
  useEffect(() => {
    fetch('/api/tea')
      .then((res) => res.json())
      .then((data) => setTeas(data));
  }, []);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [input, setInput] = useState({
    sort: '', name: '', description: '', location: '', country: '', img: '',
  });
  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('/api/tea', input).then((res) => {
      setTeas((prev) => [res.data, ...prev]);
      setInput({
        sort: '', name: '', description: '', location: '', country: '', img: '',
      });
    });
  };

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`/api/tea/${id}`);
      setTeas((prev) => prev.filter((el) => el.id !== id));
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };
  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <Button variant="primary" onClick={handleShow}>
          Добавление
        </Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Добавление</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <APForm input={input} submitHandler={submitHandler} inputHandler={inputHandler} />
          </Offcanvas.Body>
        </Offcanvas>
        <div className="p-2 ms-auto">
          <APSelect />
        </div>
      </Stack>

      <Row>
        {teas?.map((tea) => (
          <Col xs={4}><TeaCard key={tea.id} deleteHandler={deleteHandler} tea={tea} /></Col>
        ))}
      </Row>
    </>
  );
}
