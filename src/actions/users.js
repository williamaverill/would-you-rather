export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const CREATE_USER = "CREATE_USER";
export const CHANGE_AVATAR = "CHANGE_AVATAR";
export const GET_SCORE = "GET_SCORE";

function logIn(id) {
  return {
    type: LOG_IN,
    id,
  };
}

function logOut(id) {
  return {
    type: LOG_OUT,
    id,
  };
}

function createUser(user) {
  return {
    type: CREATE_USER,
    user,
  };
}

function changeAvatar(id, avatarURL) {
  return {
    type: CHANGE_AVATAR,
    id,
    avatarURL,
  };
}

function getScore(id) {
  return {
    type: GET_SCORE,
    id,
  };
}

export function handleLogIn(id) {
  return (dispatch) => {
    dispatch(logIn(id));
  };
}

export function handleLogOut(id) {
  return (dispatch) => {
    dispatch(logOut(id));
  };
}

export function handleCreateUser(user) {
  return (dispatch) => {
    dispatch(createUser(user));
  };
}

export function handleChangeAvatar(id, avatarURL) {
  return (dispatch) => {
    dispatch(changeAvatar(id, avatarURL));
  };
}

export function handleGetScore(id) {
  return (dispatch) => {
    dispatch(getScore(id));
  };
}
