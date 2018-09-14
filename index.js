import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './src/App';

import { store } from './src/store';

function render(store) {
    const Application = () => (
      <Provider store={store}>
        <App/>
      </Provider>
    );
    return AppRegistry.registerComponent('reactNativeInterview', () => Application);
}

render(store)


  


