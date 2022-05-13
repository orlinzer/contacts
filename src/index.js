import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import IndexPage from './pages/Index/IndexPage'
import AboutPage from './pages/About/AboutPage'

import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
