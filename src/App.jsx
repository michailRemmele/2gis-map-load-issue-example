import React, { useEffect } from 'react';
import { load } from '@2gis/mapgl';

const MapWrapper = React.memo(
  () => {
      return <div id="map-container" style={{ width: '100%', height: '100%' }}></div>;
  },
  () => true,
);

export const App = () => {
  useEffect(() => {
    let map;

    load().then((mapglAPI) => {
      // mapglAPI будет равен undefined, из-за использования системы модулей SystemJS
      // Бандл с API 2GIS (https://mapgl.2gis.com/api/js) содержит такой код:
      // {
      //   "object" == typeof exports && "object" == typeof module
      //     ? module.exports = t()
      //     : "function" == typeof define && define.amd // <--- При использовании systemjs/dist/extras/amd define определен и срабатывает это условие
      //       ? define([], t) // <--- также, в вызове define не определено имя модуля и System.import(<name>) не сработает чтобы хоть как-то получить доступ к загруженному API
      //       : "object" == typeof exports
      //         ? exports.mapgl = t()
      //         : e.mapgl = t() // <--- e === window в данном случае, но этот код не отрабатывает, поэтому load скрипт из @2gis/mapgl не может достать API из window
      // }
      map = new mapglAPI.Map('map-container', {
          center: [55.31878, 25.23584],
          zoom: 13,
          key: 'Your API access key',
      });
    });

    return () => map && map.destroy();
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
        <MapWrapper />
    </div>
  );
}
