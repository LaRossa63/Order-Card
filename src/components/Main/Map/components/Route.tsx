import { useAppSelector } from 'hooks';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

export const Route = () => {
  const map = useMap();
  const startingPoint = useAppSelector((state) => state.orders.startingPoint);
  const endPoint = useAppSelector((state) => state.orders.endPoint);

  useEffect(() => {
    if (!map) return;

    map.fitBounds([startingPoint, endPoint]);
  }, [endPoint, map, startingPoint]);

  return <div>Route</div>;
};
