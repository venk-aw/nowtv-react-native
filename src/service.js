import { getMessages, getMembers } from './data';
import { MESSAGES_LOADING, USERS_LOADING } from './actions';

export function getChatLog() {
  return {
    type: MESSAGES_LOADING,
    payload: getMessages()
  };
}

export function getUsers() {
  return {
    type: USERS_LOADING,
    payload: getMembers()
  }
}
