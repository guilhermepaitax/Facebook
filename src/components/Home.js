import React, { Component } from 'react';

import Header from './Header';
import PostList from './PostList';

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <PostList />
      </>
    );
  }
}
