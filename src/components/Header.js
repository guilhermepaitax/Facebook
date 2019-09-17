import React from 'react';

import '../styles/Header.css';
import logo from '../assets/face_logo.png';
import avatar from '../assets/avatar.jpg';

export default function Header() {
  return (
    <header>
      <a href="#">
        <img src={logo} alt="logo"/>
      </a>
      <div>
        <img src={avatar} alt="avatar"/>
        <span>Julius Rock</span>
      </div>
    </header>
  );
}
