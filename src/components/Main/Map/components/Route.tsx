import { useAppSelector } from 'hooks';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';

L.Marker.prototype.options.icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
});

export const Route = () => {
  const map = useMap();
  const startingPoint = useAppSelector((state) => state.orders.startingPoint);
  const endPoint = useAppSelector((state) => state.orders.endPoint);

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(startingPoint), L.latLng(endPoint)],
      routeWhileDragging: true,
      show: false,
    }).addTo(map);

    map.fitBounds([startingPoint, endPoint]);

    return () => {
      map.removeControl(routingControl);
    };
  }, [endPoint, map, startingPoint]);

  return <></>;
};
