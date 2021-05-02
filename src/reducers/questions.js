import {SAVE_QUESTION_ANSWER, ADD_QUESTION, RECEIVE_QUESTIONS, REMOVE_QUESTION_ANSWER } from '../actions/questions';

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.qid]: action.question,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([action.question.qid])
        }
      };
    case SAVE_QUESTION_ANSWER:
      return {
        ...state,
        [action.qid] : {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat(action.authedUser)
          }
        }
      };
    case REMOVE_QUESTION_ANSWER:
      return {
        ...state,
          [action.qid] : {
            ...state[action.qid],
            [action.answer] : {
              ...state[action.qid][action.answer],
              votes: state[action.qid][action.answer].votes.filter((uid) => uid !== action.authedUser)
          }
        }
      };
    default:
      return state;
  };

}
