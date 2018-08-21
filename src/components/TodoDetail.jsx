import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router'
import Moment from 'moment';

const DATE_FORMAT = 'DD MMM YYYY hh:mm:ss';

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
      <div>
        <h3>To-Do : {this.props.todoData ? this.props.todoData.text : "-"}</h3>
        <h3>Status : {this.props.todoData
          ? (this.props.todoData.completed ? "Completed" : "Active")
          : "-"}
        </h3>
        <h3>Created At : { Moment(this.props.todoData.createdAt).format(DATE_FORMAT) }</h3>
        { this.props.todoData.completedAt
          ? <h3>Completed At : { Moment(this.props.todoData.completedAt).format(DATE_FORMAT) }</h3>
          : <span></span>
        }
        <button
          className="destroy"
          onClick={() => this.backToMainPage()}
        >
        Back
        </button>
      </div>
    );
  }
}
