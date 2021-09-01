import React from 'react';
import styles from './GoogleMapsPointer.scss';
import { GrLocationPin } from 'react-icons/gr';
import PropTypes from 'prop-types';

const GoogleMapsPointer = ({ type, cityData, text, selectCity }) => {
  const clickHandler = () => {
    console.log('CITY: ', text, 'type: ', type);
  };

  return (
    <button
      className={
        type === 'distance'
          ? styles.gMapsPointerDistance
          : type === 'points'
            ? styles.gMapsPointerDistancePoints
            : styles.gMapsPointer
      }
      onClick={type === 'array' ? () => selectCity(cityData) : clickHandler}
    >
      {type !== 'distance' && type !== 'points' ? (
        <GrLocationPin className={styles.gMapsPointerIcon} />
      ) : (
        <div></div>
      )}
      <div className={styles.gMapsPointerPoint}></div>
      <div className={styles.gMapsPointerText}>{text}</div>
    </button>
  );
};

GoogleMapsPointer.propTypes = {
  type: PropTypes.string,
  cityData: PropTypes.object,
  text: PropTypes.string,
  selectCity: PropTypes.func,
};

export default GoogleMapsPointer;
