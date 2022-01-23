import {
  RECEIVE_DATA,
  CREATE_QUESTION,
  ANSWER_QUESTION,
} from "../actions/shared";

import {
  LOG_IN,
  LOG_OUT,
  CREATE_USER,
  CHANGE_AVATAR,
  GET_SCORE,
  GET_AUTHENTICATED,
} from "../actions/users";

export default function users(state = [], action) {
  switch (action.type) {
    case CREATE_QUESTION:
      return state
        .filter((user) => user.id === action.author)[0]
        .questions.concat([action.id]);
    case ANSWER_QUESTION:
      const qid = action.qid;
      const answer = action.answer;
      return state
        .filter((user) => user.id === action.authedUser)[0]
        .answers.concat([{ [qid]: answer }]);
    case LOG_IN:
      return state.map((user) =>
        user.id !== action.id
          ? user
          : Object.assign({}, user, { authenticated: true })
      );
    case LOG_OUT:
      return state.map((user) =>
        user.id !== action.id
          ? user
          : Object.assign({}, user, { authenticated: false })
      );
    case CREATE_USER:
      return state.concat([action.user]);
    case CHANGE_AVATAR:
      return (state.filter((user) => user.id === action.id)[0].avatarURL =
        action.avatarURL);
    case GET_SCORE:
      return (
        state.filter((user) => user.id === action.id)[0].questions.length +
        state.filter((user) => user.id === action.id)[0].answers.length
      );
    case RECEIVE_DATA:
      return action.users;
    default:
      return state;
  }
}
