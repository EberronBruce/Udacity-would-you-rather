import { saveQuestion, saveQuestionAnswer } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

export function recieveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions: questions
  };
}

//TODO need to be more defined on the question
function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question: question
  };
}

export function handleAddQuestion(optionOneText, OptionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestion({
      optionOneText: optionOneText,
      optionTwoText: OptionTwoText,
      author: authedUser
    })
    .then((question) => dispatch(addQuestion(question)));
  };
}

function saveAnswer(authedUser, qid, answer ) {
  return {
    type: SAVE_QUESTION_ANSWER,
    qid: qid,
    authedUser: authedUser,
    answer: answer
  };
}

export function handleSaveAnswer(info) {
  return (dispatch) => {
    dispatch(saveAnswer(info))

    return saveQuestionAnswer(info)
      .catch((e) => {
        console.war("Error in handleSaveAnswer: ", e)
        dispatch() //How to undo the save? Issue here
        alert("There was an error saving the answer. Try again.")
      })
  }
}
