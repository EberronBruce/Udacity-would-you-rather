export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_ANSWER = 'ADD_ANSWER';

export function recieveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users: users
  };
}
