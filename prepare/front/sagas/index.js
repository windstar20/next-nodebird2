import { all, fork, take, call, put, takeLatest, delay } from 'redux-saga/effects';
import axios from "axios";
import postSaga from './post';
import userSaga from './user';

export default function* rootSaga() {
    yield all([
        fork(userSaga),
        fork(postSaga),
    ])
};

//take : 실행후 사라짐.
//take : 보완 => while(true) => takeEvery
//takeEvery  : while(true)
//takeLatest : 마지막것만
//takeLeading: 첫번째것만
//throttle : 중복 요청 방지 위한 시간설정 가능( yield throttle('ADD_REQUEST', addPost, 1000);


// function logInAPI(){
//     return axios.post('/api/login')
// }
//
//
// function* logIn(action) {
//     try {
//         //call 동기, fork 비동기
//         // const result = yield call(logInAPI, action.data);
//         yield delay(1000);
//         //* put의 역할은 Dispatch와 같음
//         yield put({
//             type: 'LOG_IN_SUCCESS',
//             // data: result.data,     //성공 결과 값
//         });
//     } catch (err) {
//         yield put({
//             type: 'LOG_IN_FAILURE',
//             data: err.response.data, //실패 결과 값
//         })
//     }
// }
//
// function logOutApi() {
//     return axios.post('/api/logout');
// }
//
// function* logOut() {
//     try {
//         // yield call(logOutApi);
//         yield delay(1000);
//         yield put({
//             type: 'LOG_OUT_SUCCESS',
//         });
//     } catch (err) {
//         yield put({
//             type: 'LOG_OUT_FAILURE',
//             data: err.response.data,
//         })
//     }
// }

// function addPostAPI(data) {
//     return axios.post('/api/logout', data);
// }
//
// function* addPost(action) {
//     try {
//         // const result = yield call(addPostAPI, action.data);
//         yield delay(1000);
//         yield put({
//             type: 'ADD_POST_SUCCESS',
//             // data: result.data
//         });
//     } catch (err) {
//         yield put({
//             type: 'ADD_POST_FAILURE',
//             data: err.response.data,
//         })
//     }
// }

// function* watchLogIn() {
//     // while (true) {
//         yield takeLatest('LOG_IN_REQUEST', logIn);
//     // }
// }
// function* watchLogOut() {
//     yield takeLatest('LOG_OUT_REQUEST', logOut);
// }
// function* watchAddPost() {
//     yield takeLatest('ADD_POST_REQUEST', addPost);
// }
