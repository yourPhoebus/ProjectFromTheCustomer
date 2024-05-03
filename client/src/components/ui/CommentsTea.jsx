import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function CommentsTea({ comment, name }) {
  return (
     <Card style={{ width: '50rem' }}>
      <Card.Header><Card.Title>{name}</Card.Title></Card.Header>
      <Card.Body>
        <Card.Text>
          {comment}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  )
}
