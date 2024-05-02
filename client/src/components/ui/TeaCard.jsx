import React from 'react';
import {
  Button, Card, Col, Container, Row,
} from 'react-bootstrap';

export default function TeaCard({ tea, deleteHandler }) {
  return (
    <Card className="mt-3">
      <Card.Img variant="top" src={tea.img} style={{ maxHeight: 300 }} />
      <Card.Body style={{ height: 300 }}>
        <Card.Title>{tea?.name}</Card.Title>
        <Card.Text>{tea?.sort}</Card.Text>
        <Card.Text>{tea?.description}</Card.Text>
        <Card.Text>{tea?.country}</Card.Text>
        <Button onClick={() => deleteHandler(tea.id)} variant="danger">Удалить</Button>
      </Card.Body>
    </Card>

  );
}
