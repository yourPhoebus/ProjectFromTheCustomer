import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TeaCard({card}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card.img} />
      <Card.Body>
        <Card.Title>{card.name}</Card.Title>
        <Card.Text>{card.country}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TeaCard;