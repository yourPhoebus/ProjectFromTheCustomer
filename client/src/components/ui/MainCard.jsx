import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function TeaCard({ card }) {
  const navigate = useNavigate();
  return (
    <Card className="mt-3">
      <Card
        style={{ width: '18rem' }}
        onClick={() => {
          navigate(`/teas/${card.id}`);
        }}
      >
        <Card.Img variant="top" src={card.img} style={{ maxHeight: 300 }} />
        <Card.Body style={{ height: 300 }}>
          <Card.Title>{card.name}</Card.Title>
          <Card.Text>{card.sort}</Card.Text>
          <Card.Text>{card.description}</Card.Text>
          <Card.Text>{card.country}</Card.Text>
        </Card.Body>
      </Card>
    </Card>
  );
}

export default TeaCard;
