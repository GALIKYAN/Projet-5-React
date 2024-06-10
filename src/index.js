import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';
import'./assets/scss/pages/houses.scss'
import './assets/scss/layouts/headers.scss'
import './assets/scss/pages/about.scss'
import'./assets/scss/components/banner.scss'
import'./assets/scss/components/slideshow.scss'
import './assets/scss/pages/error.scss'
import App from './App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>,
  document.getElementById("root")
)