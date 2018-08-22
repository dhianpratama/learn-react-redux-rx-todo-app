import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router'

import { displayDate } from '../services/DateService';

import '../styles/TodoDetail.css';

export default class TodoDetail extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    todoData: PropTypes.object.isRequired
  }

  backToMainPage = () => {
    browserHistory.push('/');
  }

  render() {
    return (
      <div className="todo-detail pad-l-r-10">
        <h3>Task : {this.props.todoData ? this.props.todoData.text : "-"}</h3>
        <h3>Status : {this.props.todoData
          ? (this.props.todoData.completed ? "Completed" : "Active")
          : "-"}
        </h3>
        <h3>Created At : { displayDate(this.props.todoData.createdAt) }</h3>
        { this.props.todoData.completedAt
          ? <h3>Completed At : { displayDate(this.props.todoData.completedAt) }</h3>
          : <span></span>
        }
        <div className="spacer"></div>
        <button
          className="back-to-main-page"
          onClick={() => this.backToMainPage()}
        >
        Back
        </button>
      </div>
    );
  }
}
