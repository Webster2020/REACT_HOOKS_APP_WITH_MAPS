import React from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import GoogleMapsPointer from '../../common/GoogleMapsPointer/GoogleMapsPointer';
import { getDistanceFromLatLngInKm } from '../../../utils/getDistance';

const props = {
  center: {
    lat: 52.3,
    lng: 21.01,
  },
  zoom: 3,
};

const GoogleMaps = ({
  chosenCities,
  selectCityA,
  selectCityB,
  selectedCityA,
  selectedCityB,
  distancePoints,
  pointsArr,
  showDist,
  mapZoom,
}) => {
  const citiesA = chosenCities[0].map((el, index) => (
    <GoogleMapsPointer
      key={index}
      type='array'
      cityData={el}
      lat={el.lat}
      lng={el.lng}
      text={`${el.name},${el.country}`}
      selectCity={(cityDataA) => {
        selectCityA(cityDataA);
      }}
    />
  ));

  const citiesB = chosenCities[1].map((el, index) => (
    <GoogleMapsPointer
      key={index}
      type='array'
      cityData={el}
      lat={el.lat}
      lng={el.lng}
      text={`${el.name},${el.country}`}
      selectCity={(cityDataB) => {
        selectCityB(cityDataB);
      }}
    />
  ));

  const singleCityA = (
    <GoogleMapsPointer
      type='object'
      lat={selectedCityA.lat}
      lng={selectedCityA.lng}
      text={`${selectedCityA.name},${selectedCityA.country}`}
    />
  );

  const singleCityB = (
    <GoogleMapsPointer
      type='object'
      lat={selectedCityB.lat}
      lng={selectedCityB.lng}
      text={`${selectedCityB.name},${selectedCityB.country}`}
    />
  );

  const distancePoint = (
    <GoogleMapsPointer
      type='distance'
      lat={distancePoints.lat}
      lng={distancePoints.lng}
      text={`${distancePoints.name} ~${getDistanceFromLatLngInKm(
        selectedCityA.lat,
        selectedCityA.lng,
        selectedCityB.lat,
        selectedCityB.lng
      )}km`}
    />
  );

  const pointsBetweenCities = pointsArr.map((el, index) => (
    <GoogleMapsPointer key={index} type='points' lat={el[0]} lng={el[1]} />
  ));

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        zoom={mapZoom}
        // center={distancePoints}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >
        {selectedCityA.name === '' || selectedCityA.name === 'Nowhere'
          ? citiesA
          : singleCityA}
        {selectedCityB.name === '' || selectedCityB.name === 'Nowhere'
          ? citiesB
          : singleCityB}
        {selectedCityA.name !== '' &&
        selectedCityA.name !== 'Nowhere' &&
        selectedCityB.name !== '' &&
        selectedCityB.name !== 'Nowhere' &&
        distancePoint.name !== '' &&
        distancePoint.name !== 'Nowhere' &&
        showDist[0] === true &&
        showDist[1] === true
          ? distancePoint
          : ''}
        {selectedCityA.name !== '' &&
        selectedCityA.name !== 'Nowhere' &&
        selectedCityB.name !== '' &&
        selectedCityB.name !== 'Nowhere' &&
        distancePoint.name !== '' &&
        distancePoint.name !== 'Nowhere' &&
        showDist[0] === true &&
        showDist[1] === true
          ? pointsBetweenCities
          : ''}
      </GoogleMapReact>
    </div>
  );
};

GoogleMaps.defaultProps = {
  selectedCityA: {
    name: 'Nowhere',
    country: 'Nowhere',
    lat: 0,
    lng: 0,
  },
  selectedCityB: {
    name: 'Nowhere',
    country: 'Nowhere',
    lat: 0,
    lng: 0,
  },
  distancePoint: {
    name: 'Nowhere',
    country: 'Nowhere',
    lat: 0,
    lng: 0,
  },
};

GoogleMaps.propTypes = {
  chosenCities: PropTypes.array,
  selectCityA: PropTypes.func,
  selectCityB: PropTypes.func,
  selectedCityA: PropTypes.object,
  selectedCityB: PropTypes.object,
  distancePoints: PropTypes.object,
  pointsArr: PropTypes.array,
  showDist: PropTypes.array,
  mapZoom: PropTypes.number,
  center: PropTypes.object,
  zoom: PropTypes.number,
};

export default GoogleMaps;
