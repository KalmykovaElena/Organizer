import React from 'react';
import { NavLink } from 'react-router-dom';
import './notFound.css';
import img from '../../../assets/404.png'

const NotFound = () => {
  return (
    <main className={'not-found-page'}>
     <img src={img} className='image' alt="" />
<div className="not-found-page__button">
      <NavLink to="/Organizer">
        Main
      </NavLink>
</div>
    </main>
  );
};

export default NotFound;
