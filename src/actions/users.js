export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

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
