import React from 'react';
import { useState } from 'react';
import styles from './Panel.scss';
import PropTypes from 'prop-types';
import PanelOption from '../PanelOption/PanelOption';
import PanelInputs from '../PanelInputs/PanelInputs';
import Button from '../../common/Button/Button';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const Panel = ({ togglePanel, panelType, actions, inputs, cityTitle }) => {
  const panelActive = `${styles.panelContainer} ${styles.panelActive}`;
  const panelDisactive = styles.panelContainer;

  const [option, setOption] = useState(0);
  const [input, setInput] = useState(0);

  const prevOption = () => {
    if (option > 0) {
      setOption(option - 1);
    }
  };

  const nextOption = () => {
    if (option < actions.length - 1) {
      setOption(option + 1);
    }
  };

  const prevInput = () => {
    if (input > 0) {
      setInput(input - 1);
    }
  };

  const nextInput = () => {
    if (input < inputs.length - 1) {
      setInput(input + 1);
    }
  };

  return (
    <section className={togglePanel ? panelActive : panelDisactive}>
      <Button onClick={panelType === 'panel' ? prevOption : prevInput}>
        <h2 className={styles.panelButtonText}>
          <IoIosArrowBack />
        </h2>
      </Button>

      {panelType === 'panel' && <PanelOption {...actions[option]} />}
      {panelType === 'cities' && (
        <PanelInputs title={cityTitle[input]} {...inputs[input]} />
      )}

      <Button onClick={panelType === 'panel' ? nextOption : nextInput}>
        <h2 className={styles.panelButtonText}>
          <IoIosArrowForward />
        </h2>
      </Button>
    </section>
  );
};

Panel.defaultProps = {
  cityTitle: ['Nowhere'],
};

Panel.propTypes = {
  togglePanel: PropTypes.bool,
  panelType: PropTypes.string,
  actions: PropTypes.array,
  inputs: PropTypes.array,
  cityTitle: PropTypes.array,
};

export default Panel;
