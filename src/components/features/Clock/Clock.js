import React from 'react';
import PropTypes from 'prop-types';
import styles from './Clock.scss';

const Clock = ({ timeIsRunning, xFactor }) => {
  return (
    <div className={styles.clock}>
      <div className={styles.clockFace}>

        <div className={`${styles.clockMinutes} ${timeIsRunning && xFactor=='1' && styles.mx1} ${timeIsRunning && xFactor=='10' && styles.mx10} ${timeIsRunning && xFactor=='100' && styles.mx100} ${timeIsRunning && xFactor=='1000' && styles.mx1000}`}></div>

        <div className={`${styles.clockSeconds} ${timeIsRunning && xFactor=='1' && styles.sx1} ${timeIsRunning && xFactor=='10' && styles.sx10} ${timeIsRunning && xFactor=='100' && styles.sx100} ${timeIsRunning && xFactor=='1000' && styles.sx1000}`}></div>

        <div className={`${styles.clockSeconds100} ${timeIsRunning && xFactor=='1' && styles.s100x1} ${timeIsRunning && xFactor=='10' && styles.s100x10} ${timeIsRunning && xFactor=='100' && styles.s100x100} ${timeIsRunning && xFactor=='1000' && styles.s100x1000}`}></div>

      </div>
    </div>
  );
};

Clock.propTypes = {
  timeIsRunning: PropTypes.bool,
  xFactor: PropTypes.string,
};

export default Clock;
