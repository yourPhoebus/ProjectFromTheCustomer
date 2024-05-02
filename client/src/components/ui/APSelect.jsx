import React from 'react';
import { Form } from 'react-bootstrap';

export default function APSelect() {
  // useState на массив локаций
  // useEffect на загрузку
  return (
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      {/** locations.map((el) => <option value=.... />) */}
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  );
}
