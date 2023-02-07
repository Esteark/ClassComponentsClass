import React from 'react';
import './style.scss';

const Button = ({children, theme}) => {
  return (
    <button className={`button button__${theme}`}>
        {children}
    </button>
  )
}

export default Button