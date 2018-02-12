import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as store from 'store';

ReactDOM.render(
  <AppContainer store={store} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
