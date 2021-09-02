import React from 'react';
import PropTypes from 'prop-types';
import { dataStore } from '../../../data/dataStore';
import styles from './Slider.scss';

class Slider extends React.Component {
  state = {
    currentSlide: 0,
    slidesCount: this.props.slides.length,
  };

  intervalMethod = () => {
    this.setState({
      currentSlide:
        this.state.currentSlide < this.props.slides.length - 1
          ? this.state.currentSlide + 1
          : 0,
    });
  };

  componentDidMount() {
    clearInterval(this.interval);
    this.interval = setInterval(this.intervalMethod, 2000);
  }

  handleSlideChange(newSlide) {
    clearInterval(this.interval);
    setTimeout(() => {
      this.interval = setInterval(this.intervalMethod, 2000);
    }, 5000);
    this.setState({ currentSlide: newSlide });
  }

  render() {
    const { activeSlider, slides } = this.props;
    const { slidesCount, currentSlide } = this.state;
    console.log(slides);
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(
        <li className={styles.sliderDot}>
          <button
            key={i}
            onClick={() => this.handleSlideChange(i)}
            className={i === currentSlide && styles.sliderButtonActive}
          ></button>
        </li>
      );
    }

    const images = [];
    for (let i = 0; i < slidesCount; i++) {
      images.push(
        <div
          className={
            i === currentSlide
              ? `${styles.sliderImageWrapper} ${styles.sliderImageActive}`
              : styles.sliderImageWrapper
          }
        >
          <img
            key={i}
            src={slides[currentSlide]}
            alt={`SORRY - SLIDE -${i}- IN BUILD.`}
            className={i === currentSlide && styles.sliderImageActive}
          />
        </div>
      );
    }

    const imagesSmall = [];
    for (let i = 0; i < slidesCount; i++) {
      imagesSmall.push(
        <div className={styles.sliderImageSmall}>
          <img
            key={i}
            src={slides[i]}
            alt={`img ${i}`}
            className={i === currentSlide && styles.sliderImageSmallActive}
          />
        </div>
      );
    }

    return (
      <section className={`${styles.sliderContainer} ${styles.sliderBcgColor}`}>
        <h1
          className={styles.sliderTitle}
        >{`${activeSlider.toUpperCase()} in SLIDES`}</h1>
        <h3 className={styles.sliderSubtitle}>
          {dataStore.slider.title.subtitleText}
        </h3>

        <div className={styles.sliderWrapper}>
          <div className={styles.sliderDotsWrapper}>
            <ul className={styles.sliderDotsList}>{dots}</ul>
          </div>
          <div className={styles.sliderContentWrapper}>
            <div className={styles.sliderImagesSmallWrapper}>{imagesSmall}</div>
            {images}
          </div>
        </div>
      </section>
    );
  }
}

Slider.propTypes = {
  activeSlider: PropTypes.string,
  slides: PropTypes.array,
};

Slider.defaultProps = {
  slides: [],
};

export default Slider;
