import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => (
  <div className='header'>
    <div className='container'>
    <h1 className='header__title'>{props.title}</h1>
    {props.subtitle && <h2 className='header__subtitle'>{props.subtitle}</h2>}
    </div>
  </div>
);
  
Header.defaultProps = {
    title: 'Indecision-App'  // Indecision-App
  };

export default Header