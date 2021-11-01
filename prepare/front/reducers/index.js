import { HYDRATE } from "next-redux-wrapper";

import user from './user';
import post from './post';
import {combineReducers} from "redux";


// const initialState = {
//     user: {
//
//     },
//     post: {
//
//     }
// }

//리듀서의 역할: (이전상태, 액션) => 다음상태를 만들어내는 함수
const rootReducer = combineReducers({
    index: (state={}, action) => {
        switch (action.type) {
            case HYDRATE :
                // getInitialProps를 쓰지 않고, getStaticProps, serversideProps를 사용위해 생김.
                console.log('HYDRATE  ', action);
                return { ...state, ...action.payload};
            default:
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;