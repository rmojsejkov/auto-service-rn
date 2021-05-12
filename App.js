import React from 'react';
import { enableScreens  } from 'react-native-screens';
import { OverflowMenuProvider } from 'react-navigation-header-buttons';

import {store} from './store';
import AppNavigator from "./navigation/AppNavigation";

enableScreens();

export default function App() {
  return (
      <OverflowMenuProvider store={store}>
          <AppNavigator />
      </OverflowMenuProvider>
  );
}

