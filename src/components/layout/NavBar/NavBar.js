import React from 'react';
import { useState } from 'react';
import { dataStore } from '../../../data/dataStore';
import styles from './NavBar.scss';
import Button from '../../common/Button/Button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';
import { FaCity, FaWeebly } from 'react-icons/fa';
import { GiSettingsKnobs } from 'react-icons/gi';

const NavBar = ({ togglePanel, setPanelType }) => {
  const activeButton = `${styles.navListElem} ${styles.navListElemActive}`;
  const disactiveButton = styles.navListElem;

  const activeHiddenList = `${styles.navHiddingListWrapper} ${styles.navHiddingListWrapperActive}`;
  const disactiveHiddenList = styles.navHiddingListWrapper;

  const navExpand = styles.navExpand;
  const navExpandRot = `${styles.navExpand} ${navExpandRot}`;

  const [page, setPage] = useState('home');
  const [showNav, setShowNav] = useState(false);

  const changePageToHome = () => {
    setPage('home');
  };

  const changePageToMap = () => {
    setPage('map');
  };

  const changePageToStopwatch = () => {
    setPage('stopwatch');
  };

  const displayHiddenList = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className={styles.navContainer}>
      <section className={styles.navWrapper}>
        <div className={styles.navInnerWrapper}>
          <Button onClick={() => changePageToHome()}>
            <Link to={`/`} className={styles.navLink}>
              <h1 className={styles.navLogo}>{dataStore.nav.logo.title}</h1>
              <h1 className={styles.navLogoIcon}>
                <FaWeebly />
              </h1>
            </Link>
          </Button>
          <Button onClick={() => displayHiddenList()}>
            <h1 className={!showNav ? navExpand : navExpandRot}>
              <AiFillCaretDown />
            </h1>
          </Button>
          <div className={showNav ? activeHiddenList : disactiveHiddenList}>
            <ul className={styles.navHiddingList}>
              <li className={styles.navHiddingListElem}>
                <Button onClick={() => changePageToHome()}>
                  <Link to={`/`} className={styles.navLink}>
                    <h1 className={styles.navElem}>{dataStore.nav.home.title}</h1>
                  </Link>
                </Button>
              </li>
              <li className={styles.navHiddingListElem}>
                <Button onClick={() => changePageToMap()}>
                  <Link to={`/map`} className={styles.navLink}>
                    <h1 className={styles.navElem}>{dataStore.nav.map.title}</h1>
                  </Link>
                </Button>
              </li>
              <li className={styles.navHiddingListElem}>
                <Button onClick={() => changePageToStopwatch()}>
                  <Link to={`/stopwatch`} className={styles.navLink}>
                    <h1 className={styles.navElem}>
                      {dataStore.nav.stopwatch.title}
                    </h1>
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.navInnerWrapper}>
          <ul className={styles.navList}>
            <li className={page !== 'map' ? disactiveButton : activeButton}>
              <Button
                onClick={() => {
                  setPanelType('cities');
                  togglePanel();
                }}
              >
                <h1 className={styles.navText}>CITIES</h1>
                <h1 className={styles.navIcon}>
                  <FaCity />
                </h1>
              </Button>
            </li>
            <li className={page !== 'map' ? disactiveButton : activeButton}>
              <Button
                onClick={() => {
                  setPanelType('panel');
                  togglePanel();
                }}
              >
                <h1 className={styles.navText}>PANEL</h1>
                <h1 className={styles.navIcon}>
                  <GiSettingsKnobs />
                </h1>
              </Button>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

NavBar.propTypes = {
  togglePanel: PropTypes.func,
  setPanelType: PropTypes.func,
};

export default NavBar;
