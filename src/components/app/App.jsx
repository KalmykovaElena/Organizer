import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css'
import NotFound from '../pages/notFound/NotFound';
import Main from '../pages/main/Main';


export default function App() {
  return (
    <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Organizer' element={<Main />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
