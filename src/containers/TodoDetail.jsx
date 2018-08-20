import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

  render() {
    const { todoId } = this.props;
    return (
      <div>
        <h1>Todo Detail {todoId}</h1>;
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  todoId: ownProps.params.id
});

const mapDispatchToProps = dispatch => ({
  getTodoDetail: (id) => dispatch(getTodoDetail(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoDetail);
