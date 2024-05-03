import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

export default function APSelect({ country, handleCountryChange }) {
  const arrNames = (country) => {
    const uniqueSet = new Set();
    country.forEach((item) => uniqueSet.add(item.country));
    return Array.from(uniqueSet);
  };
  console.log(arrNames(country));
  const countryStr = arrNames(country);
  console.log(countryStr);
 // -> получи массив только строк (названий стран), а в массиве строк убери повторы
  return (
    <Form.Select onChange={handleCountryChange} aria-label="Default select example">
      <option value="">Выберете страну</option>
      {countryStr.map((el, index) => (
        <option key={el.index} value={el}>
          {el}
        </option>
      ))}
    </Form.Select>
  );
}
