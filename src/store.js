import { createStore } from 'redux';

const initialState = {
  tasks: [
    { id: 1, description: 'Task 1', isDone: false },
    { id: 2, description: 'Task 2', isDone: true },
    { id: 3, description: 'Task 3', isDone: false },
  ],
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        id: Date.now(),
                        description: action.payload.description,
                        isDone: false
                    }
                ]
            };
        case 'EDIT_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload.id) {
                        return {
                            ...task,
                            description: action.payload.description,
                            isDone: action.payload.isDone
                        };
                    } else {
                        return task;
                    }
                })
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;

