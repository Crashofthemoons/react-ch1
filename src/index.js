import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Kennel from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Kennel />, document.getElementById('root'));
registerServiceWorker();
