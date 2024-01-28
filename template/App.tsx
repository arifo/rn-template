import React, { useEffect } from 'react';

import BootSplash from 'react-native-bootsplash';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppContainer from 'AppContainer';
import { persistor, store } from 'store';
import { ThemeContextProvider } from 'views/contexts/ThemeContext';
import { LocaleContextProvider } from 'views/contexts/LocaleContext';

const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <LocaleContextProvider>
            <ThemeContextProvider>
              <AppContainer />
            </ThemeContextProvider>
          </LocaleContextProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default gestureHandlerRootHOC(App);
