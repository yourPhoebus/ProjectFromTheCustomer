import React, { useState, useEffect } from 'react';
import { YMaps, Map } from '@pbe/react-yandex-maps';
import TeaCard from '../ui/TeaCard';
import MainMap from '../ui/MainMap';

export default function MainPage() {
  const [cards, setCards] = useState([]);

  // const deleteHandler = (id) => {
  //   const newPost = await fetch('//')
  //   if(res.status === 200) {
  //     // setCards((prev) => prev.filter((el) => el.id !== cardId))
  //     setCards((prev) => [newPost, ...prev ] )
  //   }
  // }

  useEffect(() => {
    fetch('/api/')
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <>
      <MainMap cards={cards} />
      <div>
        {cards.map((card) => (
          <TeaCard key={card.id} card={card} />
        ))}
      </div>

    </>
  );
}
