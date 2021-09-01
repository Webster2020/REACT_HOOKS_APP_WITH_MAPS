import React from 'react';
import styles from './PanelInputs.scss';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import { useState } from 'react';

const PanelInputs = ({ title, setCoordsCity }) => {
  const [cityName, setCityName] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleCityName = (e) => {
    setCityName(e.target.value);
    setInputValue(e.target.value);
  };

  const addCity = (cityName) => {
    setCoordsCity(cityName);
    setInputValue('');
  };

  return (
    <div className={styles.panelInputsContainer}>
      <h2 className={styles.panelInputsTitle}>{title}</h2>
      <input
        className={styles.panelInputsInput}
        value={inputValue}
        onChange={handleCityName}
      />
      <Button onClick={() => addCity(cityName)}>
        <h2 className={styles.panelInputsButtonText}>ADD</h2>
      </Button>
    </div>
  );
};

PanelInputs.propTypes = {
  title: PropTypes.string,
  setCoordsCity: PropTypes.func,
};

export default PanelInputs;
