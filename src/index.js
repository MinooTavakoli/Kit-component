import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/css/fontiran.css'
import MyActivity from './screens/components/My-Activity/MyActivity'
import Profile from './screens/components/profile/profile'
import Data from './screens/components/My-Activity/Data-Activity'
import Login from './screens/components/login/login'
import CssGrid from './screens/components/CssGrid/cssGrid'
ReactDOM.render(
    <CssGrid />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
