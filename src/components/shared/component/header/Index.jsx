import React from 'react';
import MenuLink from "./MenuLink.jsx";

const Header = ({ headerLink }) => {
  return (
    <header className="header" id="header">
      <nav className="navbar container">
        <a href="src/components/shared/header" className="logo"><img src="/icons/gs-logo-horz.svg" alt="luminary FED logo"/></a>
        <div className="burger" id="burger">
          <span className="burger-line"></span>
        </div>
        <div className="menu" id="menu">
          <ul className="menu-inner">
            {headerLink.map((item, index) => {
              return (
                <MenuLink item={item} key={index}/>
              );
            })}
            <li className="menu-item"><a href="src/components/shared/header" className="menu-link"><img src="/icons/icon-search.svg" className="icon-search" alt="Icon Search"/></a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
