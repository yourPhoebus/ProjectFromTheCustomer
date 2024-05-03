import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import CommentsTea from '../ui/CommentsTea';
import AddComment from '../ui/AddComment';

export default function TeaPage() {
  const [tea, setTea] = useState({});
  const { id } = useParams();
  const [coms, setComs] = useState([]);

  useEffect(() => {
    fetch(`/api/teas/${id}`)
      .then((response) => response.json())
      .then((data) => { setTea(data); setComs(data.Comments); });
  }, [id]);
  console.log('--->>', coms);
  console.log(tea.Comments);
  const [input, setInput] = useState({
    text: '',
  });

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(`/api/teas/${tea.id}/comments`, input)
      .then((res) => {
        setComs((prev) => [res.data, ...prev]);
        setInput({
          text: '',
        });
      })
      .catch((error) => {
        console.error('Error adding comment:', error);
      });
  };

  return (
    <Card style={{ width: '50rem', margin: '0 auto' }}>
      <Card.Img variant="top" src={tea.img} />
      <Card.Body>
        <Card.Title>{tea.name}</Card.Title>
        <Card.Text>{tea.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{tea.sort}</ListGroup.Item>
        <ListGroup.Item>{tea.country}</ListGroup.Item>
        {/* <ListGroup.Item>{tea.location}</ListGroup.Item> */}
        <br />
        {coms.map((el) => (
          <CommentsTea key={el.id} comment={el.text} name={el.User?.name} />
        ))}
        <br />
        <AddComment inputHandler={inputHandler} submitHandler={submitHandler} input={input} />
      </ListGroup>
    </Card>
  );
}
