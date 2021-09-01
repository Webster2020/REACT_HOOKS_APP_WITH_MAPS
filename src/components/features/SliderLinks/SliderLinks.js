import React from 'react';
import styles from './SliderLinks.scss';
import { dataStore } from '../../../data/dataStore';
import Button from '../../common/Button/Button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SliderLinks = ({ id, no, setActiveSlider }) => {
  return (
    <li className={styles.sliderLinksListElem}>
      <Button onClick={() => setActiveSlider()}>
        <Link to={`/slider/${id}`} className={styles.sliderLinksNavLink}>
          <h1 className={styles.sliderLinksNavLinkText}>
            {`${no}. ${dataStore.home.slider[id].title}`}
          </h1>
          <h1 className={styles.sliderLinksNavLinkTextMobile}>
            {`${no}. ${dataStore.home.slider[id].titleMobile}`}
          </h1>
        </Link>
      </Button>
    </li>
  );
};

SliderLinks.propTypes = {
  id: PropTypes.string,
  no: PropTypes.number,
  setActiveSlider: PropTypes.func,
};

export default SliderLinks;
