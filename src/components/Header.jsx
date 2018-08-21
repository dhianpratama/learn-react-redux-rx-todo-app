import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from './ErrorMessage';

export default class Header extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  render() {
    return (
      <header className="header">
        <div className="container">
          <img
            className="logo"
            alt="logo"
            src="https://demo.playgame.com/assets/images/img-logo.svg"
          />
        </div>
        <h1>{this.props.title}</h1>
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
