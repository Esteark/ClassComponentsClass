import React from 'react';
import './style.scss';

const Header = ({ text, list }) => {

  return (
    <>
        <div>
            <p>{text}</p>
            <nav>
                <ul className='menu'>
                    {
                        list.map((element, index) => (
                            <li key={index} className="menu__item">{element.name}</li>
                        ))
                    }
                </ul>
            </nav>
        </div>
        <div>

        </div>
    </>
  )
}

export default Header