import React from 'react';
import PropTypes from "prop-types";
import styles from "./StopwatchForm.scss";
import Button from "../../common/Button/Button";

const StopwatchForm = ({
  distance,
  velocity,
  xFactor,
  timeIsRunning,
  handleDistance,
  handleVelocity,
  handleXFactor,
  handleRunTimer,
  handleResetTimer
}) => {
  return (
    <div className={styles.stopwatchFormWrapper}>
      <div className={styles.stopwatchFormInputWrapper}>
        <h3 className={styles.stopwatchFormInputTitle}>DISTANCE [km]</h3>
      </div>
      <div className={styles.stopwatchFormInputWrapper}>
        <input value={distance} onChange={handleDistance} />
      </div>
      <div className={styles.stopwatchFormInputWrapper}>
        <h3 className={styles.stopwatchFormInputTitle}>VELOCITY [km/h]</h3>
      </div>
      <div className={styles.stopwatchFormInputWrapper}>
        <input value={velocity} onChange={handleVelocity} />
      </div>
      <div className={styles.stopwatchFormInputWrapper}>
        <h3 className={styles.stopwatchFormInputTitle}>X FASTER</h3>
      </div>
      <div className={styles.stopwatchFormInputWrapper}>
        <input value={xFactor} onChange={handleXFactor} />
      </div>
      <div className={styles.stopwatchFormInputWrapper}>
        <Button onClick={() => handleRunTimer()}>
          <h3 className={styles.stopwatchFormInputButton}>
            {timeIsRunning ? "STOP" : "RUN"}
          </h3>
        </Button>
      </div>
      <div className={styles.stopwatchFormInputWrapper}>
        <Button onClick={() => handleResetTimer()}>
          <h3 className={styles.stopwatchFormInputButton}>RESET</h3>
        </Button>
      </div>
    </div>
  );
};

StopwatchForm.propTypes = {
  distance: PropTypes.number,
  velocity: PropTypes.number,
  xFactor: PropTypes.number,
  timeIsRunning: PropTypes.bool,
  handleDistance: PropTypes.func,
  handleVelocity: PropTypes.func,
  handleXFactor: PropTypes.func,
  handleRunTimer: PropTypes.func,
  handleResetTimer: PropTypes.func
};

export default StopwatchForm;
