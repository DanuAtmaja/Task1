import React from 'react';

const Header = ({ headerLink }) => {
  return (
    <header className="header" id="header">
      <nav className="navbar container">
        <a href="" className="logo"><img src="/gs-logo-horz.svg" alt="luminary FED logo"/></a>
        <div className="burger" id="burger">
          <span className="burger-line"></span>
        </div>
        <div className="menu" id="menu">
          <ul className="menu-inner">
            {headerLink.map((item, index) => {
              return (
                <li className="menu-item" key={index}><a href="" className="menu-link">{item}</a></li>
              );
            })}
            <li className="menu-item"><a href="" className="menu-link"><img src="/icon-search.svg" alt="Icon Search"/></a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
