import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO} from '../action/actions.js';

// const _defaultState = {
//     todo: []
// }
// const initialState = {
//     1: {
//       id: 1,
//       title: "wash car",
//       body: "with soap",
//       done: false
//     },
//     2: {
//       id: 2,
//       title: "wash dog",
//       body: "with shampoo",
//       done: true
//     }
//   };
  

const todosReducer = (oldState = {}, action) => {
    Object.freeze(oldState); //nothing can be add or remove
    let nextState = {};
    
    switch(action.type){
        case RECEIVE_TODOS:
            action.todos.forEach(todo => {
                 nextState[todo.id] = todo;
            });
            return nextState;
        case RECEIVE_TODO:
            const newTodo = {[action.todo.id]: action.todo};
            return Object.assign({}, oldState, newTodo);
        case REMOVE_TODO:
            nextState = Object.assign({}, oldState);
            delete nextState[action.todo.id];
            return nextState;
        default:
            return oldState;
    }
};

export default todosReducer;



