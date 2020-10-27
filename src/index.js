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
import ChatPanel from './screens/components/chat-panel/ChatPanel'
import Grid from './screens/components/CssGrid/Grid'
import ChatListPage from './screens/components/chat-list/ChatListPage'
import ChatRouter from './screens/components/chat-list/routes/Chat-Router'

ReactDOM.render(
  <Profile
  // ChatService={ChatService}
  // Data={Data} 
  />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
