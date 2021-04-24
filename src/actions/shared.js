import { getInitialData } from '../utils/api';
import { recieveQuestions } from '../actions/questions';
import { recieveUsers } from '../actions/users';
import { setAuthedUser } from '../actions/authedUser';

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions}) => {
        dispatch(recieveUsers(users));
        dispatch(recieveQuestions(questions));
      })
  }
}

export function handleAuthedUser(id) {
  return (dispatch) => {
    dispatch(setAuthedUser(id));
  }
}
