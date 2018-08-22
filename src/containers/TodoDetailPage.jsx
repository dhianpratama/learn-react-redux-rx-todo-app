import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../components/Header';
import TodoDetail from '../components/TodoDetail';

import {
  getTodoDetail,
} from '../actions/TodoDetailActions';

class TodoDetailPage extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    todoId: PropTypes.string.isRequired,
    getTodoDetail: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getTodoDetail(this.props.todoId);
  }

  render() {
    const { todo } = this.props;
    return (
      <div>
        <Header
          title="MY TASK DETAIL"
          loading={todo.pending}
          error={todo.error ? todo.error.message : ''}
        />
        <TodoDetail
          loading={todo.pending}
          error={todo.error ? todo.error.message : ''}
          todoData={todo.data ? todo.data : {} }
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  todoId: ownProps.params.id,
  todo: state.todo
});

const mapDispatchToProps = dispatch => ({
  getTodoDetail: (id) => dispatch(getTodoDetail(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoDetailPage);
