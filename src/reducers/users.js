import { RECEIVE_USERS, ADD_ANSWER, REMOVE_ANSWER, ADD_USER_QUESTION } from '../actions/users';

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ADD_USER_QUESTION:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: state[action.authedUser].questions.concat([action.question.id])
        }
      }
    case ADD_ANSWER:
      return {
        ...state,
        [action.authedUser] : {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer
          }
        }
      }
    case REMOVE_ANSWER:
    //Can't figure out a way to remove the item from the object another way.
    //This way works, if there is a better way let me know.
      delete state[action.authedUser].answers[action.qid];
      return state;
    default:
      return state
  }
}
