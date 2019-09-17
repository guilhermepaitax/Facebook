import React from 'react';

import '../styles/Comment.css';

import avatar from '../assets/avatar.jpg';

export default function Comment() {
  return (
    <div className="comment">
      <img src={avatar} alt="avatar"/>
      <div className="text-comment">
      <p className="comment-content"><span className="comment-user-name">Julius Rock</span>
      Responsável por exibir os dados do post, esses dados devem vir através de uma propriedade recebida do componente PostList, ou seja, lá no PostList você terá algo assim</p>
      </div>
    </div>
  );
}
