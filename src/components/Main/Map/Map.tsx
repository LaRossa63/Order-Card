import { useAppSelector } from 'hooks';
import React from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Route } from './components';
import 'leaflet/dist/leaflet.css';

export const Map = () => {
  const coord = useAppSelector((state) => state.orders.startCoord);

  return (
    <MapContainerStyled center={coord} zoom={10} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Route />
    </MapContainerStyled>
  );
};

const MapContainerStyled = styled(MapContainer)`
  &.leaflet-container {
    width: 50vw;
    height: 70vh;
  }
`;
