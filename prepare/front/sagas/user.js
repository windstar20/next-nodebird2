import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    FOLLOW_FAILURE,
    FOLLOW_REQUEST,
    FOLLOW_SUCCESS,
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_OUT_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    UNFOLLOW_FAILURE,
    UNFOLLOW_REQUEST,
    UNFOLLOW_SUCCESS
} from '../reducers/user';

function logInAPI(){
    return axios.post('/api/login');
}

function* logIn(action) {
    console.log('사가 실행', action);
    try {
        //call 동기, fork 비동기
        // const result = yield call(logInAPI, action.data);
        yield delay(1000);
        //* put의 역할은 Dispatch와 같음
        yield put({
            type: LOG_IN_SUCCESS,
            data: action.data,     //성공 결과 값
        });
    } catch (err) {
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data, //실패 결과 값
        });
    }
}

function logOutApi() {
    return axios.post('/api/logout');
}

function* logOut() {
    try {
        // yield call(logOutApi);
        yield delay(1000);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        })
    }
}

function sighUpAPI() {
    return axios.post('/api/signUp');
}

function* sighUp() {
    try {
        // yield call(logOutApi);
        yield delay(1000);
        // throw new Error('');
        yield put({
            type: SIGN_UP_SUCCESS,
        });
    } catch (err) {
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        });
    }
}

function followAPI() {
    return axios.post('/api/follow');
}

function* follow(action) {
    try {
        // yield call(logOutApi);
        yield delay(1000);
        // throw new Error('');
        yield put({
            type: FOLLOW_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        yield put({
            type: FOLLOW_FAILURE,
            error: err.response.data,
        });
    }
}

function unfollowAPI() {
    return axios.post('/api/unfollow');
}

function* unfollow(action) {
    try {
        // yield call(logOutApi);
        yield delay(1000);
        // throw new Error('');
        yield put({
            type: UNFOLLOW_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        yield put({
            type: UNFOLLOW_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchLogIn() {
    // while (true) {
    yield takeLatest(LOG_IN_REQUEST, logIn);
    // }
}
function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, sighUp);
}
function* watchFollow() {
    yield takeLatest(FOLLOW_REQUEST, follow);
}
function* watchUnFollow() {
    yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

export default function* userSaga() {
    yield all([
        fork(watchFollow),
        fork(watchUnFollow),
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ]);
}