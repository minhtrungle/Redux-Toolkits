import { configureStore } from '@reduxjs/toolkit';
import counter from "./reducers";

export default combineReducers({
    counter: counter,
});
