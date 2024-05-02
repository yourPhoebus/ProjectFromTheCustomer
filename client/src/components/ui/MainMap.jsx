import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import MapMarker from './MapMarker';

function MainMap({ cards }) {
  return (
    <YMaps>
      <div>
        <Map width={1300} height={500} defaultState={{ center: [36.47, 3.04], zoom: 2 }}>
          {cards.map((card) => (
            <Placemark key={card.id} geometry={card.location.split(', ').map((el) => el * 1)} properties={cards} cards={cards} />
          ))}
        </Map>
      </div>
    </YMaps>
  );
}

export default MainMap;
