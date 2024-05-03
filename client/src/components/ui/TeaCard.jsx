import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {
  Button, Card, Col, Container, Row,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function TeaCard({ tea, deleteHandler }) {
  const navigate = useNavigate();
  return (
    <Card className="mt-3">
      <Card.Img
        variant="top"
        onClick={() => {
          navigate(`/teas/${tea.id}`);
        }}
        src={`http://localhost:3000//img/${tea.img || 'noimage.webp'}`}
        style={{ maxHeight: 300 }}
      />
      <Card.Body style={{ height: 300 }}>
        <Card.Title>{tea?.name}</Card.Title>
        <Card.Text>{tea?.sort}</Card.Text>
        <Card.Text>{tea?.country}</Card.Text>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Описание</Accordion.Header>
            <Accordion.Body>
              <Card.Text>{tea?.description}</Card.Text>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Button className='mt-3' style={{ float: 'right' }} onClick={() => deleteHandler(tea.id)} variant="danger">Удалить</Button>
      </Card.Body>
    </Card>

  );
}
