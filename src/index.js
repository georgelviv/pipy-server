import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from 'common';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
