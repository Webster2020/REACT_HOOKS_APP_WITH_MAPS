import React from 'react';
import styles from './Button.scss';
import PropTypes from 'prop-types';

const Button = ({ children, onClick }) => {
  return (
    <div className={styles.btnWrapper}>
      <button className={styles.btn} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

Button.defaultProps = {
  children: '',
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
