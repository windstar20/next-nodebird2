import { createWrapper } from 'next-redux-wrapper';
import reducer from '../reducers/index';
import {applyMiddleware, compose, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

//* STORE 생성
const configureStore = () => {
    const middlewares = [];
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(applyMiddleware(...middlewares))

    const store = createStore(reducer, enhancer);

    return store;
}
//위에서 만든 함수, 옵션객체: 개발모드에서 자세한 설명을 위한 옵션
const wrapper = createWrapper(
    configureStore,
    {debug: process.env.NODE_ENV === 'development'}
);

export default wrapper;