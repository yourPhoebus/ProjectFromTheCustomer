import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/esm/Container';
import { useParams } from 'react-router-dom';
import CommentCard from '../ui/CommentCard';

export default function UserPage({ user }) {
  // const { id } = useParams();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios('/api/userpage').then((data) => setComments(data.data));
  }, []);

  return (
    <Container>
      {comments.filter((el) => el.user_id === user?.id).map((comment) => (<CommentCard key={comment.id} comment={comment} />))}
    </Container>
  );
}
