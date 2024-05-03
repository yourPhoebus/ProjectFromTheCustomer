import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function MapMarker({ cards }) {
  return (
    <Placemark geometry={[55.76, 37.64]} options={{ hintContent: `${cards.name}`, ballContent: <a href={`http://localhost:5173/teas/${cards.id}`}>{cards.name}</a> }} />
  );
}

export default MapMarker;
