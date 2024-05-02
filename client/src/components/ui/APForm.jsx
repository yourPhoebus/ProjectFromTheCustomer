import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function APForm({ input, inputHandler, submitHandler }) {
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Сорт</Form.Label>
        <Form.Control name="sort" onChange={inputHandler} value={input.sort} type="text" placeholder="Сорт" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Название</Form.Label>
        <Form.Control name="name" onChange={inputHandler} value={input.name} type="text" placeholder="Название" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Описание</Form.Label>
        <Form.Control name="description" onChange={inputHandler} value={input.description} type="text" placeholder="Описание" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Гео позиция</Form.Label>
        <Form.Control name="location" onChange={inputHandler} value={input.location} type="text" placeholder="Гео позиция" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Страна</Form.Label>
        <Form.Control name="country" onChange={inputHandler} value={input.country} type="text" placeholder="Страна" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>img</Form.Label>
        <Form.Control name="img" onChange={inputHandler} value={input.img} type="text" placeholder="img" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
