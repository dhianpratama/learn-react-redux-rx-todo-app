import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/ActionNames'

import '../styles/Footer.css';

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Outstanding',
  [SHOW_COMPLETED]: 'Completed',
};

export default class Footer extends Component {
  static propTypes = {
    completedCount: PropTypes.number.isRequired,
    activeCount: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    onClearCompleted: PropTypes.func.isRequired,
    filterTodos: PropTypes.func.isRequired,
  }

  _renderTodoCount() {
    const { activeCount } = this.props;
    const itemWord = activeCount === 1 ? 'task' : 'tasks';

    return (
      <span className="todo-count">
        <strong>{activeCount || 'No'}</strong> outstanding {itemWord}
      </span>
    );
  }

  _renderFilterLink(filter) {
    const title = FILTER_TITLES[filter];
    const { filter: selectedFilter, filterTodos } = this.props;

    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <a
        className={classnames({ selected: filter === selectedFilter })}
        style={{ cursor: 'pointer' }}
        onClick={() => filterTodos(filter)}
      >
        {title}
      </a>
    );
  }

  render() {
    const { filter: selectedFilter, filterTodos } = this.props;

    return (
      <footer className="footer pad-l-r-10">
        {this._renderTodoCount()}
        <div className="filters">
          {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter =>
            <button
              className={classnames({ selected: filter === selectedFilter })}
              onClick={() => filterTodos(filter)}
              >
              {FILTER_TITLES[filter]}
            </button>,
          )}
          <button className="clear-completed">
            <a
              onClick={this.props.onClearCompleted}
            >
            Delete All Completed
            </a>
          </button>
        </div>
      </footer>
    );
  }
}
