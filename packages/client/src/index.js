import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from '~components/root/Router';
import 'antd/dist/reset.css';
import './assets/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
