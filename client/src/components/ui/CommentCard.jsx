import React from 'react';
import Card from 'react-bootstrap/Card';

export default function CommentCard({ comment }) {
  return (
    <Card>
      <Card.Header as="h5">Name: {comment.User.name} Role: {comment.User.role}</Card.Header>
      <Card.Body>
        <Card.Text>
          {comment.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
