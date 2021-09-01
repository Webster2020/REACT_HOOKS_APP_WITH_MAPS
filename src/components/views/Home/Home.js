import React from 'react';
import styles from './Home.scss';
import { dataStore } from '../../../data/dataStore';
import PropTypes from 'prop-types';
import SliderLinks from '../../features/SliderLinks/SliderLinks';

const Home = ({ setActiveSlider }) => {
  return (
    <article>
      <section className={`${styles.homeContainer} ${styles.homeBcgColor}`}>
        <h1 className={styles.homeTitle}>{dataStore.home.title.titleText}</h1>
        <h3 className={styles.homeSubtitle}>{dataStore.home.title.subtitleText}</h3>
        <div className={styles.homeListWrapper}>
          <ul>
            <SliderLinks
              id={'map'}
              no={1}
              setActiveSlider={() => setActiveSlider('map')}
            />
            <SliderLinks
              id={'stopwatch'}
              no={2}
              setActiveSlider={() => setActiveSlider('stopwatch')}
            />
          </ul>
        </div>
      </section>
    </article>
  );
};

Home.propTypes = {
  setActiveSlider: PropTypes.func,
};

export default Home;
