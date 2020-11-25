import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/app'
import * as serviceWorker from './serviceWorker';
import '@/style/iconfont.css'
import '@/style/common.less'
import 'antd/dist/antd.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
