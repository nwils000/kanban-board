/* eslint-disable no-case-declarations */
import { v4 as uuidv4 } from 'uuid';

const JSONStorage = JSON.parse(localStorage.getItem('STATE'));

export const initialTasksState = JSONStorage ?? {
  tasks: [],
  totalCount: 0,

};

export const tasksReducer = (state, action) => {
  // console.log('action', action);
  switch (action.type) {
    case 'ADD_TASK':
      // console.log(state);
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            title: action.task.title,
            taskNumber: state.totalCount + 1,
            dateCreated: action.task.dateCreated,
            severity: action.task.severity,
            category: action.task.category,
            id: uuidv4(),
          },
        ],
        totalCount: state.totalCount + 1,
      };

    case 'EDIT_TASK':
      const editedTasks = state.tasks.map((task) => {
        if (task.id === action.task.id) {
          return {
            ...task,
            title: action.task.title,
            dateCreated: action.task.dateCreated,
            severity: action.task.severity,
            category: action.task.category,
          };
        } else {
          return task;
        }
      });
      return {
        ...state,
        tasks: editedTasks,
      };

    case 'DELETE_TASK':
      console.log('DELETED TASKS111', state.tasks);
      console.log('DA ID', action.task.id);
      const deletedTasks = state.tasks.filter((task) => {
        return task.id !== action.task.id;
      });
      console.log('DELETED TASKS', deletedTasks);
      return {
        ...state,
        tasks: deletedTasks,
      };
  }
};
