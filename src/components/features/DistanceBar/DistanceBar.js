import React from 'react';
import PropTypes from 'prop-types';
import styles from './DistanceBar.scss';

const DistanceBar = ({ distance, currentDistance }) => {
  return (
    <div className={styles.distanceBarWrapper}>
      <div className={styles.distanceBarDesc}>A</div>
      <div className={styles.distanceBar}>
        <h3 className={styles.distanceValue}>
          {Number(currentDistance).toFixed(2) / Number(distance).toFixed(2) >
          0.999
            ? Number(distance).toFixed(2)
            : Number(currentDistance).toFixed(2)}
          km/
          {Number(distance).toFixed(2)}km
        </h3>
        <div
          className={styles.distanceBarFilling}
          style={
            distance !== 0
              ? { width: `${(100 * currentDistance) / distance}%` }
              : { width: `${0}%` }
          }
        ></div>
      </div>
      <div className={styles.distanceBarDesc}>B</div>
    </div>
  );
};

DistanceBar.propTypes = {
  distance: PropTypes.number,
  currentDistance: PropTypes.number,
};

export default DistanceBar;
