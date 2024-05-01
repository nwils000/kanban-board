import { v4 as uuidv4 } from 'uuid';

export const initialTasksState = {
  tasks: [],
};

export const tasksReducer = (state, action) => {
  console.log('action', action);
  switch (action.type) {
    case 'ADD_TASK':
      console.log(state);
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            title: action.task.title,
            taskNumber: action.task.index,
            dateCreated: action.task.dateCreated,
            storyPoints: action.task.storyPoints,
            category: action.task.category,
            id: uuidv4(),
          },
        ],
      };
  }
};
