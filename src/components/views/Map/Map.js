import React from 'react';
import { useState } from 'react';
import styles from './Map.scss';
import { dataStore } from '../../../data/dataStore';
import Panel from '../../features/Panel/Panel';
import PropTypes from 'prop-types';
import GoogleMaps from '../../features/GoogleMaps/GoogleMaps';
import Button from '../../common/Button/Button';
import { findCityCoordsArr } from '../../../utils/findCityCoords';
import { findPointsCoordsArr } from '../../../utils/findPointsCoords';
import {
  calcCenterPointLat,
  calcCenterPointLng,
} from '../../../utils/calcCenterPoint';
import { RiFullscreenLine, RiFullscreenExitLine } from 'react-icons/ri';

const Map = ({ togglePanel, panelType }) => {
  const activePanel = `${styles.mapContainer} ${styles.mapBcgColor} ${styles.activePanel}`;
  const disactivePanel = `${styles.mapContainer} ${styles.mapBcgColor}`;
  const mapFullScreen = `${styles.mapContainer} ${styles.mapBcgColor} ${styles.mapFullScreen}`;

  const [mapWidth, setmapWidth] = useState(0);
  const [mapBorderRadius, setmapBorderRadius] = useState(0);
  const [mapBorderWidth, setmapBorderWidth] = useState(3);
  const [mapFontSize, setmapFontSize] = useState(20);

  const [cityArrA, setCityArrA] = useState([]);
  const [cityArrB, setCityArrB] = useState([]);
  const [selectedCityA, setSelectedCityA] = useState({
    name: '',
    country: '',
    lat: 0,
    lng: 0,
  });
  const [selectedCityB, setSelectedCityB] = useState({
    name: '',
    country: '',
    lat: 0,
    lng: 0,
  });

  const [distancePoints, setDistancePoints] = useState({
    name: '',
    country: '',
    lat: 0,
    lng: 0,
  });

  const [pointsArr, setPointsArr] = useState([]);
  const [showDist, setShowDist] = useState([false, false]);
  const [mapZoom, setMapZoom] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);

  const panelActions = [
    {
      id: 0,
      title: 'WIDTH',
      increaseOption: () => {
        if (mapWidth < 0) {
          setmapWidth(mapWidth + 50);
        }
      },
      decreaseOption: () => {
        if (mapWidth > -300) {
          setmapWidth(mapWidth - 50);
        }
      },
    },
    {
      id: 1,
      title: 'BORDER RADIUS',
      increaseOption: () => {
        if (mapBorderRadius < 200) {
          setmapBorderRadius(mapBorderRadius + 5);
        }
      },
      decreaseOption: () => {
        if (mapBorderRadius > 0) {
          setmapBorderRadius(mapBorderRadius - 5);
        }
      },
    },
    {
      id: 2,
      title: 'BORDER WIDTH',
      increaseOption: () => {
        if (mapBorderWidth < 20) {
          setmapBorderWidth(mapBorderWidth + 1);
        }
      },
      decreaseOption: () => {
        if (mapBorderWidth > 0) {
          setmapBorderWidth(mapBorderWidth - 1);
        }
      },
    },
    {
      id: 3,
      title: 'FONT SIZE',
      increaseOption: () => {
        if (mapFontSize < 50) {
          setmapFontSize(mapFontSize + 1);
        }
      },
      decreaseOption: () => {
        if (mapFontSize > 0) {
          setmapFontSize(mapFontSize - 1);
        }
      },
    },
  ];

  const panelInputsActions = [
    {
      setCoordsCity: (cityNameA) => {
        setCityArrA(findCityCoordsArr(cityNameA));
        setSelectedCityA({
          name: '',
          country: '',
          lat: 0,
          lng: 0,
        });
      },
    },
    {
      setCoordsCity: (cityNameB) => {
        setCityArrB(findCityCoordsArr(cityNameB));
        setSelectedCityB({
          name: '',
          country: '',
          lat: 0,
          lng: 0,
        });
      },
    },
  ];

  const setPointsCoords = (latA, latB, lngA, lngB) => {
    setPointsArr(() => [...findPointsCoordsArr(latA, latB, lngA, lngB)]);
  };

  const selectCityA = (cityDataA) => {
    setSelectedCityA(cityDataA);
    setShowDist([!showDist[0] ? showDist[0] : !showDist[0], showDist[1]]);
  };

  const selectCityB = (cityDataB) => {
    setSelectedCityB(cityDataB);
    setShowDist([!showDist[0], showDist[1] ? showDist[1] : !showDist[1]]);
  };

  const displayDistance = () => {
    const centerPoint = {
      name: 'Distance:',
      country: '...km',
      lat: calcCenterPointLat(selectedCityA, selectedCityB),
      lng: calcCenterPointLng(selectedCityA, selectedCityB),
    };
    setDistancePoints(centerPoint);
    setPointsCoords(
      Number(selectedCityA.lat),
      Number(selectedCityB.lat),
      Number(selectedCityA.lng),
      Number(selectedCityB.lng)
    );
    setShowDist([
      showDist[0] ? showDist[0] : !showDist[0],
      showDist[1] ? showDist[1] : !showDist[1],
    ]);
  };

  const zoomMapIn = () => {
    if (mapZoom < 10 && mapZoom >= 3) {
      setMapZoom(mapZoom + 1);
    } else if (mapZoom < 3) {
      setMapZoom(mapZoom + 3);
    }
  };

  const zoomMapOut = () => {
    if (mapZoom > 3) {
      setMapZoom(mapZoom - 1);
    }
  };

  const handleFullScreen = () => {
    setFullScreen(!fullScreen);
  };

  return (
    <article>
      <Panel
        togglePanel={togglePanel}
        panelType={panelType}
        actions={panelActions}
        inputs={panelInputsActions}
        cityTitle={['CITY A', 'CITY B']}
      />
      <section
        className={
          !fullScreen
            ? togglePanel
              ? activePanel
              : disactivePanel
            : mapFullScreen
        }
        style={{
          width: `calc(100vw - 40px + ${mapWidth}px)`,
          borderRadius: `${mapBorderRadius}px`,
          borderWidth: `${mapBorderWidth}px`,
          padding: `${0}px`,
          fontSize: `${mapFontSize}px`,
        }}
      >
        <h1 className={styles.mapTitle}>{dataStore.map.title.titleText}</h1>
        <h3 className={styles.mapSubtitle}>{dataStore.map.title.subtitleText}</h3>
        <GoogleMaps
          chosenCities={[cityArrA, cityArrB]}
          selectedCityA={selectedCityA}
          selectedCityB={selectedCityB}
          selectCityA={(cityDataA) => selectCityA(cityDataA)}
          selectCityB={(cityDataB) => selectCityB(cityDataB)}
          distancePoints={distancePoints}
          pointsArr={pointsArr}
          showDist={showDist}
          mapZoom={mapZoom}
        />
        <div className={styles.mapFullScreenWrapper}>
          <Button onClick={() => handleFullScreen()}>
            <h2 className={styles.mapZoomButton}>
              {!fullScreen ? <RiFullscreenLine /> : <RiFullscreenExitLine />}
            </h2>
          </Button>
        </div>
        <div className={styles.mapShowDistance}>
          <Button onClick={() => displayDistance()}>
            <h2 className={styles.mapButtonText}>DISTANCE</h2>
          </Button>
        </div>
        <div className={styles.mapZoomInWrapper}>
          <Button onClick={() => zoomMapIn()}>
            <h2 className={styles.mapZoomButton}>&nbsp;+&nbsp;</h2>
          </Button>
        </div>
        <div className={styles.mapZoomOutWrapper}>
          <Button onClick={() => zoomMapOut()}>
            <h2 className={styles.mapZoomButton}>&nbsp;-&nbsp;</h2>
          </Button>
        </div>
        <div className={styles.mapBefore}></div>
      </section>
    </article>
  );
};

Map.defaultProps = {
  togglePanel: false,
};

Map.propTypes = {
  togglePanel: PropTypes.bool,
  panelType: PropTypes.string,
};

export default Map;
