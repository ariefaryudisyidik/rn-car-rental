import React from 'react';
import {StatusBar} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Navigation from './navigation/';
import {COLORS} from './themes';

const MainApp = () => {
  return (
    <>
      <StatusBar backgroundColor={COLORS.primary} barStyle="default" />
      <Navigation />
      <FlashMessage position="top" />
    </>
  );
};

const App = () => {
  return <MainApp />;
};

export default App;
