import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function logInAPI(){
    return axios.post('/api/login')
}


function* logIn(action) {
    console.log('사가 실행', action);
    try {
        //call 동기, fork 비동기
        // const result = yield call(logInAPI, action.data);
        yield delay(1000);
        //* put의 역할은 Dispatch와 같음
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: action.data,     //성공 결과 값
        });
    } catch (err) {
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data, //실패 결과 값
        })
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
            type: 'LOG_OUT_SUCCESS',
        });
    } catch (err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data,
        })
    }
}

function* watchLogIn() {
    // while (true) {
    yield takeLatest('LOG_IN_REQUEST', logIn);
    // }
}
function* watchLogOut() {
    yield takeLatest('LOG_OUT_REQUEST', logOut);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
    ])

}