import { HYDRATE } from "next-redux-wrapper";
const initialState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {},
    },
    post: {
        mainPosts: [],
    }
}

//액션 크리에이터 함수 action creator
export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
}

export const logoutAction = () => {
    return {
        type: 'LOG_OUT',
    }
}

//리듀서의 역할: (이전상태, 액션) => 다음상태를 만들어내는 함수
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE :
            // getInitialProps를 쓰지 않고, getStaticProps, serversideProps를 사용위해 생김.
            console.log('HYDRATE  ', action);
            return { ...state, ...action.payload};
        case 'LOG_IN' :
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data,
                }
            };
        case 'LOG_OUT' :
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: false,
                    user: null,
                },
            };
        default:
            return state;
    }
};

export default rootReducer;