import { getInitialData } from '../utils/api';
import { recieveQuestions } from '../actions/questions';
import { recieveUsers } from '../actions/users';
import { setAuthedUser } from '../actions/authedUser';

const AUTHED_USER_ID = 'johndoe' //TODO: Remove after testing

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions}) => {
        dispatch(recieveUsers(users));
        dispatch(recieveQuestions(questions));
        dispatch(setAuthedUser(AUTHED_USER_ID)) //TODO: remove after testing
      })
  }
}

export function handleAuthedUser(id) {
  return (dispatch) => {
    dispatch(setAuthedUser(id));
  }
}
