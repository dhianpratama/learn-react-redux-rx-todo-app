import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from './ErrorMessage';

import './Header.css'

export default class Header extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  render() {
    return (
      <header className="header">
        <img
          className="logo"
          alt="logo"
          src="https://demo.playgame.com/assets/images/img-logo.svg"
        />
        <label className="title">{this.props.title}</label>
        <ErrorMessage message={this.props.error} />
        {this.props.loading
          ? <h2>Loading todos...</h2>
          : (
            <div></div>
          )
        }
      </header>
    );
  }
}
