import { createStore } from 'redux';

// createStore(reducer, initialStoreState)

// Reducer: a function :: (state, action) => newState

// {
//   todoLists: { id1: list1, id2: list2, id3: list3 },
//   todoItems: { id1: item1, id2: item2 }
// }

const todoListsReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const store = createStore(
  todoListsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);