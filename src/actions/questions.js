
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_ANSWER = 'SAVE_ANSWER';
export const REMOVE_ANSWER = 'REMOVE_QUESTION_ANSWER'

export function recieveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions: questions
  };
}

//TODO need to be more defined on the question
export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question: question
  };
}

export function saveAnswer( {authedUser, qid, answer }) {
  return {
    type: SAVE_ANSWER,
    qid: qid,
    authedUser: authedUser,
    answer: answer
  };
}

export function removeAnswer({authedUser, qid, answer}) {
  return {
    type: REMOVE_ANSWER,
    qid: qid,
    authedUser: authedUser,
    answer: answer
  };
}
