import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Character from './pages/character';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/App.css';
import Actions from './pages/actions';
import Body from './pages/body';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="character" element={<Character />} />
      <Route path="actions" element={<Actions />} />
      <Route path="body" element={<Body />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
