import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../modules/visibilityFilter/actions';

import './Footer.css';

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
    return (
      <footer className="footer pad-l-r-10">
        {this._renderTodoCount()}
        <ul className="filters">
          {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter =>
            <li key={filter}>
              {this._renderFilterLink(filter)}
            </li>,
          )}
          <li key="CLEAR_ALL_COMPLETED">
            <a
              className="clear-completed"
              onClick={this.props.onClearCompleted}
            >
            Delete All Completed
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}
