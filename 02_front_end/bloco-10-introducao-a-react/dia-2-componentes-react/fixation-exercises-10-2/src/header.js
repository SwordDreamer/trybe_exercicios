import React, { Component } from 'react';

class Header extends Component {
  render() {
    const {message} = this.props
    return <header>{this.props.message}</header>;
  }
}

export default Header;