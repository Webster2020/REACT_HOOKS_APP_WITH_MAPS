import React from 'react';
import { useState, useRef, useEffect } from 'react';
import styles from './Stopwatch.scss';
import { dataStore } from '../../../data/dataStore';
import Clock from '../../features/Clock/Clock';
import Time from '../../features/Time/Time';
import StopwatchForm from '../../features/StopwatchForm/StopwatchForm';
import DistanceBar from '../../features/DistanceBar/DistanceBar';

const Stopwatch = () => {
  const [timeIsRunning, setTimeIsRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const [distance, setDistance] = useState(0);
  const [currentDistance, setCurrentDistance] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [xFactor, setXFactor] = useState('1');

  const intervalRef = useRef(null);

  useEffect(() => {
    if (currentTime > (distance / velocity) * 3600000) {
      handleEndInterval();
    }
  });

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleDistance = (e) => {
    setDistance(e.target.value);
  };

  const handleVelocity = (e) => {
    setVelocity(e.target.value);
  };

  const handleXFactor = (value) => {
    setXFactor(value);
  };

  useEffect(() => {
    console.log(xFactor);
  });

  function handleRunTimer() {
    if (timeIsRunning) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - currentTime;
      intervalRef.current = setInterval(() => {
        setCurrentTime((Date.now() - startTime) * xFactor);
        setCurrentDistance(
          ((Date.now() - startTime) * velocity * xFactor) / 3600000
        );
      }, 0);
    }
    setTimeIsRunning(!timeIsRunning);
  }

  function handleResetTimer() {
    clearInterval(intervalRef.current);
    setCurrentTime(0);
    setCurrentDistance(0);
    setDistance(0);
    setVelocity(0);
    setXFactor('1');
    if (timeIsRunning) {
      setTimeIsRunning(false);
    }
  }

  function handleEndInterval() {
    clearInterval(intervalRef.current);
    setTimeIsRunning(false);
  }

  return (
    <article>
      <section className={`${styles.stopwatchContainer} ${styles.stopwatchBcgColor}`}>
        <h1 className={styles.stopwatchTitle}>
          {dataStore.stopwatch.title.titleText}
        </h1>
        <h3 className={styles.stopwatchSubtitle}>
          {dataStore.stopwatch.title.subtitleText}
        </h3>
        <div className={styles.stopwatchContentWrapper}>
          <div className={styles.stopwatchFirstRow}>
            <div className={styles.stopwatchClockWrapper}>
              <Clock timeIsRunning={timeIsRunning} xFactor={xFactor} />
              <Time currentTime={currentTime} />
            </div>
            <StopwatchForm
              distance={distance}
              velocity={velocity}
              timeIsRunning={timeIsRunning}
              handleDistance={handleDistance}
              handleVelocity={handleVelocity}
              handleXFactor={handleXFactor}
              handleRunTimer={handleRunTimer}
              handleResetTimer={handleResetTimer}
            />
          </div>
          <div className={styles.stopwatchSecondRow}>
            <DistanceBar
              distance={distance}
              currentDistance={currentDistance}
            />
          </div>
        </div>
      </section>
    </article>
  );
};

export default Stopwatch;
