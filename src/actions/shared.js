import { getInitialData, saveQuestionAnswer } from '../utils/api';
import { recieveQuestions, saveAnswer, removeAnswer} from '../actions/questions';
import { recieveUsers, addUserAnswer, removeUserAnswer } from '../actions/users';


export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions}) => {
        dispatch(recieveUsers(users));
        dispatch(recieveQuestions(questions));
      })
  }
}

export function handleSaveAnswer(info) {
  return (dispatch) => {
    dispatch(saveAnswer(info))
    dispatch(addUserAnswer(info))

    return saveQuestionAnswer(info)
      .catch((e) => {
        console.war("Error in handleSaveAnswer: ", e)
        dispatch(removeAnswer(info)) //How to undo the save? Issue here
        dispatch(removeUserAnswer(info))
        alert("There was an error saving the answer. Try again.")
      })
  }
}

// Use this method for testing purpose
export function handleRemoveAnswer(info) {
  return (dispatch) => {
    dispatch(removeAnswer(info)) //How to undo the save? Issue here
    dispatch(removeUserAnswer(info))
  }
}
