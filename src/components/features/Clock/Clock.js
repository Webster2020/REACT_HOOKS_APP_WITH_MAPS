import React from 'react';
import PropTypes from "prop-types";
import styles from "./Clock.scss";

const Clock = ({ timeIsRunning, xFactor }) => {
  return (
    <div className={styles.clock}>
      <div className={styles.clockFace}>
        <div
          className={styles.clockMinutes}
          style={{
            animation:
              timeIsRunning &&
              `rotation ${3600 / xFactor}s steps(${60}) infinite`
          }}
        ></div>
        <div
          className={styles.clockSeconds}
          style={{
            animation:
              timeIsRunning && `rotation ${60 / xFactor}s steps(${60}) infinite`
          }}
        ></div>
        <div
          className={styles.clockSeconds100}
          style={{
            animation:
              timeIsRunning && `rotation ${1 / xFactor}s infinite linear`
          }}
        ></div>
      </div>
    </div>
  );
};

Clock.propTypes = {
  timeIsRunning: PropTypes.bool,
  xFactor: PropTypes.number
};

export default Clock;
