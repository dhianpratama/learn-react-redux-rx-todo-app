import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'

import Header from '../components/Header';
import TodoList from '../components/TodoList';
import TodoTextInput from '../components/TodoTextInput';

import {
  fetchTodos,
  addTodo,
  removeCompleted,
  editTodo,
  deleteTodo,
  completeTodo,
} from '../actions/TodoMainActions';
import { setVisibilityFilter } from '../actions/VisibilityFilterActions';

class TodoMainPage extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    todos: PropTypes.object.isRequired,
    fetchTodos: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    filterTodos: PropTypes.func.isRequired,
    removeCompleted: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    navigateToDetail: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchTodos();
  }

  handleSave = (text) => {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    const { todos } = this.props;
    return (
      <div>
        <Header
          addTodo={this.props.addTodo}
          title="MY TODO LIST"
          loading={todos.pending && !todos.data.length}
          error={todos.error ? todos.error.message : ''}
        />
        <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholder="Write your task here ..."
        />
        <TodoList
          todos={todos}
          filter={this.props.filter}
          filterTodos={this.props.filterTodos}
          removeCompleted={this.props.removeCompleted}
          editTodo={this.props.editTodo}
          deleteTodo={this.props.deleteTodo}
          completeTodo={this.props.completeTodo}
          navigateToDetail={this.props.navigateToDetail}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.visibilityFilter,
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos()),
  addTodo: text => dispatch(addTodo(text)),
  filterTodos: filter => dispatch(setVisibilityFilter(filter)),
  removeCompleted: () => dispatch(removeCompleted()),
  editTodo: (id, text) => dispatch(editTodo(id, text)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  completeTodo: (id, completed) => dispatch(completeTodo(id, completed)),
  navigateToDetail: (url) => { browserHistory.push(url); }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoMainPage);
