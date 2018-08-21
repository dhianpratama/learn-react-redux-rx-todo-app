import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import {
  getTodoDetail
} from '../modules/todoDetail/actions';

class TodoDetail extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    todoId: PropTypes.string.isRequired,
    getTodoDetail: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getTodoDetail(this.props.todoId);
  }

  backToMainPage = () => {
    browserHistory.push('/');
  }

  render() {
    const { todo } = this.props;
    return (
      <div>
        <h1>Todo Detail {todo.data.text}</h1>;
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
)(TodoDetail);
