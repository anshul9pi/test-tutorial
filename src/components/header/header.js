import React from 'react';

const Header = (props) => (
  <h1 className={`header ${props.className ? props.className : ''}`}>
    {props.children}
  </h1>
);

export default Header;
