import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import GlobaState from './src/context/GlobaState';
import ProductStack from './src/stacks/ProductStack';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <GlobaState>
          <ProductStack />
        </GlobaState>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
