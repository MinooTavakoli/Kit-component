import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/css/fontiran.css'
import RadioButton from './screens/components/RadioButton/RadioButton'
import Profinple from './screens/components/profile/profile'
// import Profile from './screens/components/testscss/profile'

ReactDOM.render(
  <React.StrictMode>
    <RadioButton />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
