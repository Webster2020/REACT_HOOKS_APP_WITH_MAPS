import React from 'react';
import PropTypes from 'prop-types';
import styles from './Time.scss';

const Time = ({ currentTime }) => {
  return (
    <div className={styles.time}>
      <div className={`${styles.timeUnits} ${styles.hours}`}>
        {`${
          Math.floor(currentTime / (60000 * 60)) > 9
            ? Math.floor(currentTime / (60000 * 60))
            : '0' + Math.floor(currentTime / (60000 * 60))
        }`}
        <div className={styles.timeUnitsName}>h</div>
      </div>
      <div className={styles.timeUnits}>:</div>
      <div className={`${styles.timeUnits} ${styles.minutes}`}>
        {`${
          Math.floor(currentTime / 60000) % 60 > 9
            ? Math.floor(currentTime / 60000) % 60
            : '0' + (Math.floor(currentTime / 60000) % 60)
        }`}
        <div className={styles.timeUnitsName}>min</div>
      </div>
      <div className={styles.timeUnits}>:</div>
      <div className={`${styles.timeUnits} ${styles.seconds}`}>
        {`${
          Math.floor(currentTime / 1000) % 60 > 9
            ? Math.floor(currentTime / 1000) % 60
            : '0' + (Math.floor(currentTime / 1000) % 60)
        }`}
        <div className={styles.timeUnitsName}>sec</div>
      </div>
      <div className={styles.timeUnits}>:</div>
      <div className={`${styles.timeUnits} ${styles.seconds100}`}>
        {`${
          Math.floor(currentTime / 10) % 100 > 9
            ? Math.floor(currentTime / 10) % 100
            : '0' + (Math.floor(currentTime / 10) % 100)
        }`}
      </div>
    </div>
  );
};

Time.propTypes = {
  currentTime: PropTypes.number,
};

export default Time;
