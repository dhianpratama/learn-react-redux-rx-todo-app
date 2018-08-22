import { combineEpics } from 'redux-observable';

import todoMainEpic from '../epics/TodoMainEpics';
import todoDetailEpic from '../epics/TodoDetailEpics';

export default combineEpics(
  todoMainEpic,
  todoDetailEpic
);
