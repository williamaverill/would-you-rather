import API from "../../_DATA";

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

function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

export function handleInitialData() {
  return (dispatch) => {
    return Promise.all([API._getUsers(), API._getQuestions()]).then(
      ([users, questions]) => {
        dispatch(receiveData(users, questions));
      }
    );
  };
}

export function handleCreateQuestion(question, cb) {
  return (dispatch) => {
    return API._saveQuestion(question)
      .then((formattedQuestion) => {
        dispatch(createQuestion(formattedQuestion));
        cb();
      })
      .catch(() => {
        alert("There was an error. Try again.");
      });
  };
}

export function handleAnswerQuestion({ authedUser, qid, answer }, cb) {
  return (dispatch) => {
    return API._saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => {
        dispatch(answerQuestion({ authedUser, qid, answer }));
        cb();
      })
      .catch(() => {
        alert("There was an error. Try again.");
      });
  };
}
