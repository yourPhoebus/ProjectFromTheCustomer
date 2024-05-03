import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import MainMap from '../ui/MainMap';
import MainCard from '../ui/MainCard';

export default function MainPage() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch('/api/')
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <>
      <MainMap cards={cards} />
      <Row>
        {cards.map((data) => (
          <Col xs={4}>
            <MainCard key={data.id} card={data} />
          </Col>
        ))}
      </Row>

    </>
  );
}
