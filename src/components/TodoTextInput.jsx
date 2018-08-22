import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import '../styles/TodoTextInput.css';

export default class TodoTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    // eslint-disable-next-line react/no-unused-prop-types
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool,
  }

  static defaultProps = {
    text: '',
    placeholder: '',
    editing: false,
    newTodo: false,
  }

  state = {
    text: '',
  }

  componentWillReceiveProps(props) {
    this.setState({ test: props.text });
  }

  saveTask = () => {
    this.props.onSave(this.state.text);
  }

  handleSubmit = (e) => {
    if (e.which === 13) {
      this.saveTask();
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleBlur = (e) => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  }

  render() {
    return (
      <div className="todo-text-input">
        <input
          className={
            classnames({
              'edit': this.props.editing,
              'new-todo': this.props.newTodo
            })
          }
          type="text"
          placeholder={this.props.placeholder}
          autoFocus="true"
          value={this.state.text}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
        />
        <button
          className="add-task"
          onClick={this.saveTask}>
          Add Task
        </button>
      </div>
    );
  }
}
