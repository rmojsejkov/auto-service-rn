import React from 'react';
import { enableScreens  } from 'react-native-screens';
import { OverflowMenuProvider } from 'react-navigation-header-buttons';
import {Provider} from 'react-redux';

import {store} from './store';
import AppNavigator from "./navigation/AppNavigation";

enableScreens();

export default function App() {
  return (
      <Provider store={store}>
          <AppNavigator />
      </Provider>
  );
}

