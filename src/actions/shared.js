import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../_DATA";

export const RECEIVE_DATA = "RECEIVE_DATA";
export const CREATE_QUESTION = "CREATE_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

function receiveData(users, questions) {
  return {
    type: RECEIVE_DATA,
    users,
    questions,
  };
}

function createQuestion(question) {
  return {
    type: CREATE_QUESTION,
    question,
  };
}

function answerQuestion(authedUser, qid, answer) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

export function handleInitialData() {
  return (dispatch) => {
    return Promise.all([_getUsers(), _getQuestions()]).then(
      ([users, questions]) => {
        dispatch(receiveData(users, questions));
      }
    );
  };
}

export function handleCreateQuestion(question) {
  return (dispatch) => {
    return _saveQuestion(question).then((formattedQuestion) => {
      dispatch(createQuestion(formattedQuestion));
    });
  };
}

export function handleAnswerQuestion(authedUser, qid, answer) {
  return (dispatch) => {
    return _saveQuestionAnswer(authedUser, qid, answer)
      .then(() => {
        dispatch(answerQuestion(authedUser, qid, answer));
      })
      .catch(() => {
        alert("There was an error. Try again.");
      });
  };
}
