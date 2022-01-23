// Source: https://github.com/udacity/reactnd-redux-todos-goals/blob/1177c07de724399ba9f8b1573c4c9711caa23daa/src/middleware/logger.js Accessed: 1/22/22
const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("The action: ", action);
  const result = next(action);
  console.log("The new state: ", store.getState());
  console.groupEnd();
  return result;
};

export default logger;
