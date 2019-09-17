import React from 'react';

import '../styles/Post.css';
import avatar from '../assets/avatar.jpg';

export default function Post() {
  return (
    <div className="post">
      <div className="post-header">
        <img src={avatar} alt="avatar"/>
        <div>
          <span className="post-user-name">Julius Rock</span>
          <span className="post-date">04 Jun 2019</span>
        </div>
      </div>
      <div className="post-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet consequuntur quaerat, perspiciatis corrupti nesciunt mollitia sunt suscipit voluptatum consequatur veritatis recusandae quos totam dolorem nobis ullam, nemo voluptas quis maxime!</p>
      </div>
    </div>
  );
}
