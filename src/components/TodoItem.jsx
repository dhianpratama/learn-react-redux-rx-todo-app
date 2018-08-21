import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import TodoTextInput from './TodoTextInput';

export default class TodoItem extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    navigateToDetail: PropTypes.func.isRequired
  }

  state = {
    editing: false,
  }

  handleDoubleClick = () => {
    this.setState({ editing: true });
  }

  handleSave = (id, text) => {
    if (text.length > 0) {
      this.props.editTodo(id, text);
    }
    this.setState({ editing: false });
  }

  handleSingleClick = (todoId) => {
    this.props.navigateToDetail(`/todos/${todoId}`);
  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput
          text={todo.text}
          editing={this.state.editing}
          onSave={text => this.handleSave(todo.id, text)}
        />
      );
    } else {
      const checkboxId = `checkboxItem${todo.id}`;
      element = (
        <div className="container flex">
          <div className="round">
            <input
              id={checkboxId}
              type="checkbox"
              checked={todo.completed}
              onChange={() => completeTodo(todo.id, todo.completed)}
            />
            <label htmlFor={checkboxId}></label>
          </div>
          <div className="flex" onClick={()=> this.handleSingleClick(todo.id)}>
            <p> {todo.text} </p>
          </div>
          <button
            className="destroy"
            onClick={() => deleteTodo(todo.id)}
          />
        </div>
      );
    }

    return (
      <li
        className={classnames({
          completed: todo.completed,
          editing: this.state.editing,
        })}
      >
        {element}
      </li>
    );
  }
}
