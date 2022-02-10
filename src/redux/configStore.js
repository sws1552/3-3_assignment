import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';


import User from "./modules/user";
import Post from "./modules/post";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    user: User,
    post: Post,
    router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({history: history})];

// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

// 개발환경에서는 로거라는 걸 쓰겠습니다.
if(env === 'development'){
    const {logger} = require('redux-logger');
    middlewares.push(logger);
}

// redux devTools 설정
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

// 미들웨어 묶기
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();