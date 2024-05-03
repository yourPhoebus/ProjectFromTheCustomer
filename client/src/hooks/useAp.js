import React, { useState } from 'react';
import axios from 'axios';

export default function useAddCard({ cards }) {
  const [currentCards, setCards] = useState(cards || []);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      !e.target.title.value
      || !e.target.description.value
      || !e.target.condition.value
      || !e.target.price.value
      || !e.target.file.files[0]
    ) {
      return;
    }
    const formData = new FormData();
    formData.append('title', e.target.title.value);
    formData.append('description', e.target.description.value);
    formData.append('price', e.target.price.value);
    formData.append('condition', e.target.condition.value);
    formData.append('file', e.target.file.files[0]);

    try {
      const response = await axios.post('/api/personalarea', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setCards([response.data, ...currentCards]);
      e.target.reset();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`/api/personalarea/${id}`);
      setCards(currentCards.filter((card) => card.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const editHandler = async (e, id, newData) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', newData.title);
    formData.append('description', newData.description);
    formData.append('price', newData.price);
    formData.append('condition', newData.condition);
    formData.append('file', newData.img);

    try {
      const response = await axios.put(`/api/personalarea/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setCards((prevCards) => prevCards.map((card) => (card.id === id ? response.data : card)));
    } catch (error) {
      console.error(error);
    }
  };

  return {
    currentCards,
    submitHandler,
    deleteHandler,
    editHandler,
  };
}
