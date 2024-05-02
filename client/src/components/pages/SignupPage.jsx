import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function SignupPage({ signupHandler }) {
  const [formData, setFormData] = useState({
    email: '', name: '', password: '', role: 'Guest',
  });
  const handlerChange = (e) => setFormData(
    (prev) => ({ ...prev, [e.target.name]: e.target.value }),
  );

  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      if (formData.password.length < 3) return;
      signupHandler(formData).catch(() => alert('Ошибка регистрации'));
    }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handlerChange} value={formData.email} name="email" type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={handlerChange} value={formData.name} name="name" type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control isInvalid={formData.password.length < 3} isValid={formData.password.length >= 3} onChange={handlerChange} value={formData.password} name="password" type="password" placeholder="Password" />
        <Form.Control.Feedback type="invalid">
          Пароль должен быть минимум 3 символа
        </Form.Control.Feedback>
      </Form.Group>
      <input type="hidden" name="role" value={formData.role} />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
