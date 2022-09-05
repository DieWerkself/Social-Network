import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
        profileP: profileReducer,
        messagesP: messageReducer,
        sidebar: sidebarReducer,
        usersP: usersReducer,
        auth: authReducer
    }
);

let store = createStore(reducers, applyMiddleware(thunk));



export default store;
window.state = store
