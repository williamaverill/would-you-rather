// Source: https://github.com/udacity/reactnd-redux-todos-goals/blob/1177c07de724399ba9f8b1573c4c9711caa23daa/src/middleware/index.js Accessed: 1/22/22
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

import logger from "./logger";

export default applyMiddleware(thunk, logger);
