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
      return state
        .filter((question) => question.id === action.qid)[0]
        [action.answer].votes.concat([action.authedUser]);
    case RECEIVE_DATA:
      return action.questions;
    default:
      return state;
  }
}
