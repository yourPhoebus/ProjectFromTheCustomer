import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function AddComment({input, inputHandler, submitHandler}) {


  return (
    <Card>
    <Card.Header as="h5">Оставить комментарий о чае</Card.Header>
    <Card.Body>
      <Form onSubmit={submitHandler}>
        <Col>
          <Form.Control name='text'
            size="lg"
            type="text"
            placeholder="Комментарий"
            value={input.text}
            onChange={inputHandler}
          />
        </Col>
        <Button type="submit" variant="primary">Отправить</Button>
      </Form>
    </Card.Body>
  </Card>
  )
}
