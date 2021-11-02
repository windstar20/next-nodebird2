import { createWrapper } from 'next-redux-wrapper';
import reducer from '../reducers/index';
import {applyMiddleware, compose, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
// import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    // if (typeof action === 'function') {
    //     return action(dispatch, getState);
    // }
    console.log(action);
    return next(action);
};

//* STORE 생성
const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, loggerMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(applyMiddleware(...middlewares))

    const store = createStore(reducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
}
//위에서 만든 함수, 옵션객체: 개발모드에서 자세한 설명을 위한 옵션
const wrapper = createWrapper(
    configureStore,
    {debug: process.env.NODE_ENV === 'development'}
);

export default wrapper;