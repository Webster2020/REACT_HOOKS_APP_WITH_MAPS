import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from './components/layout/NavBar/NavBar';
import FooterBar from './components/layout/FooterBar/FooterBar';
import Home from './components/views/Home/Home';
import Map from './components/views/Map/Map';
import Slider from './components/views/Slider/Slider';
import Stopwatch from './components/views/Stopwatch/Stopwatch';
import { dataStore } from './data/dataStore';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  const [showPanel, setShowPanel] = useState(false);
  const [panelType, setPanelType] = useState('');
  const [activeSlider, setActiveSlider] = useState('');

  const togglePanel = () => {
    setShowPanel(!showPanel);
  };

  const handleSetPanelType = (type) => {
    setPanelType(type);
  };

  const handleSetActiveSlider = (type) => {
    setActiveSlider(type);
  };

  useEffect(() => {
    console.log('changes in App');
  });

  return (
    <main>
      <BrowserRouter>
        <NavBar
          togglePanel={() => togglePanel()}
          setPanelType={(type) => handleSetPanelType(type)}
        />
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Home setActiveSlider={(type) => handleSetActiveSlider(type)} />
            )}
          />
          <Route
            exact
            path='/map'
            render={() => <Map togglePanel={showPanel} panelType={panelType} />}
          />
          <Route exact path='/stopwatch' render={() => <Stopwatch />} />
          <Route
            exact
            path='/slider/:id'
            render={() => (
              <Slider
                activeSlider={activeSlider}
                slides={dataStore.slides[activeSlider]}
              />
            )}
          />
        </Switch>
        <FooterBar />
      </BrowserRouter>
    </main>
  );
};

export default App;
