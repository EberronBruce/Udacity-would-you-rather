export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_ANSWER = 'ADD_ANSWER';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';

export function recieveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users: users
  };
}

export function addUserAnswer({ authedUser, qid, answer }) {
  return {
    type: ADD_ANSWER,
    authedUser: authedUser,
    qid: qid,
    answer: answer
  };
}

export function removeUserAnswer({ authedUser, qid, answer }) {
  return {
    type: REMOVE_ANSWER,
    authedUser: authedUser,
    qid: qid,
    answer: answer
  };
}
