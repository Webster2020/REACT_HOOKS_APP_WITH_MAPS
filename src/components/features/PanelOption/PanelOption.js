import React from 'react';
import styles from './PanelOption.scss';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';

const PanelOption = ({ title, increaseOption, decreaseOption }) => {
  return (
    <div className={styles.panelOptionContainer}>
      <h2 className={styles.panelOptionTitle}>{title}</h2>
      <Button onClick={decreaseOption}>
        <h2 className={styles.panelOptionButtonText}>&nbsp;-&nbsp;</h2>
      </Button>
      <Button onClick={increaseOption}>
        <h2 className={styles.panelOptionButtonText}>&nbsp;+&nbsp;</h2>
      </Button>
    </div>
  );
};

PanelOption.propTypes = {
  title: PropTypes.string,
  increaseOption: PropTypes.func,
  decreaseOption: PropTypes.func,
};

export default PanelOption;
