import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function APForm({
  submitHandler, handleClose,
}) {
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Сорт</Form.Label>
        <Form.Control name="sort" type="text" placeholder="Сорт" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Название</Form.Label>
        <Form.Control name="name" type="text" placeholder="Название" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Описание</Form.Label>
        <Form.Control name="description" type="text" placeholder="Описание" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Гео позиция</Form.Label>
        <Form.Control name="location" type="text" placeholder="Гео позиция" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Страна</Form.Label>
        <Form.Control name="country" type="text" placeholder="Страна" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>img</Form.Label>
        <Form.Control name="file" type="file" placeholder="img" />
      </Form.Group>
      <Button onClick={() => handleClose()} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
