import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function MapMarker({ cards }) {
  return (
    <Placemark geometry={[55.76, 37.64]} properties={{ hintContent: `${cards.name}`, balloonContent: <a to="./">{cards.name}</a> }} />
  );
}

export default MapMarker;
