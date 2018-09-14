import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { MESSAGES_LOADING, USERS_LOADING } from './actions';

export function reducer(state, action = {}) {
  switch (action.type) {
    case `${MESSAGES_LOADING}_FULFILLED`:
      return {
        ...state,
        messages: action.payload.sort((a, b) => (new Date(b.timestamp)).getTime() - (new Date(a.timestamp)).getTime())
      };
    case `${USERS_LOADING}_FULFILLED`:
      let users = {};
      action.payload.forEach(item => users[item.id] = item);
      return {
        ...state,
        users
      };
    default:
      return state;
  }
}

export const store = createStore(reducer, {}, applyMiddleware(
  promiseMiddleware()
));