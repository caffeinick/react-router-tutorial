import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const activeStyle = {
    color: 'teal',
    fontSize: '2rem',
  };

  // NavLink는 설정한 URL이 활성화되면, 특정 스타일 혹은 클래스 지정 가능!

  return (
    <div>
      <ul>
        <li>
          {/* <Link to="/">Home</Link> */}
          <NavLink exact to="/" activeStyle={activeStyle}>
            Home
          </NavLink>
        </li>
        <li>
          {/* <Link to="/about">About</Link> */}
          <NavLink exact to="/about" activeStyle={activeStyle}>
            About
          </NavLink>
        </li>
        <li>
          {/* <Link to="/about/foo">About Foo</Link> */}
          <NavLink to="/about/foo" activeStyle={activeStyle}>
            About Foo
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts" activeStyle={activeStyle}>
            Posts
          </NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Menu;
