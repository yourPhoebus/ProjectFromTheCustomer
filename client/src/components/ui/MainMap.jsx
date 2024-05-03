import React from 'react';
import { useNavigate } from 'react-router-dom';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import MapMarker from './MapMarker';

function MainMap({ cards }) {
  const navigate = useNavigate({});
  return (
    <YMaps>
      <div>
        <Map instanceRef={(ref) => { ref && ref.behaviors.disable('scrollZoom'); }} width={1300} height={500} defaultState={{ center: [36.47, 3.04], zoom: 2 }}>
          {cards.map((card) => {
            const link = `<img src={${card.img}} />`;
            console.log(link);
            return (
              <Placemark
                onClick={() => { navigate(`/teas/${card.id}`); }}

              // onMouseEnter={() => console.log('enter')}
                key={card.id}
                geometry={card.location.split(', ').map((el) => el * 1)}
                properties={{ hintContent: card.name }}
                cards={cards}
                options={{ draggable: true }}
                modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
              />
            );
          })}
        </Map>
      </div>
    </YMaps>
  );
}

export default MainMap;
