import React from 'react';

const MenuLink = ({item}) => {
  return (
    <li className="menu-item">
      <a href="src/components/shared/header" className="menu-link">{item}</a>
    </li>
  );
};

export default MenuLink;
