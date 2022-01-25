import {
  RECEIVE_DATA,
  CREATE_QUESTION,
  ANSWER_QUESTION,
} from "../actions/shared";

export default function questions(state = [], action) {
  switch (action.type) {
    case CREATE_QUESTION:
      return state.concat([action.question]);
    case ANSWER_QUESTION:
      return state.map((question) => {
        if (question.id !== action.qid) {
          return question;
        } else {
          return Object.assign({}, question, {
            [action.answer]: {
              votes: question[action.answer].votes.concat(action.authedUser.id),
              text: question[action.answer].text,
            },
          });
        }
      });
    case RECEIVE_DATA:
      return action.questions;
    default:
      return state;
  }
}
