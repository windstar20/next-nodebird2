
export const initialState = {
    isLoggingIn: false,  // 로그인 시도중
    isLoggedIn: false,
    isLoggingOut: false, //로그아웃 시도중
    me: null,
    signUpData: {},
    loginData: {},
}

//액션 크리에이터 함수 action creator
export const loginRequestAction = (data) => {
    console.log('액션크리에이터 loginRequestAction 실행');
    return {
        type: 'LOG_IN_REQUEST',
        data,
    }
}
// export const loginSuccessAction = (data) => {
//     return {
//         type: 'LOG_IN_SUCCESS',
//         data,
//     }
// }
// export const loginFailureAction = (data) => {
//     return {
//         type: 'LOG_IN_FAILURE',
//         data,
//     }
// }

export const logoutRequestAction = () => {
    return {
        type: 'LOG_OUT_REQUEST',
    }
}

// export const logoutSuccessAction = (data) => {
//     return {
//         type: 'LOG_OUT_SUCCESS',
//         data,
//     }
// }
// export const logoutFailureAction = (data) => {
//     return {
//         type: 'LOG_OUT_FAILURE',
//         data,
//     }
// }

const reducer = (state = initialState, action) => {
    console.log('리듀서 실행, ', action);
    switch (action.type) {
        case 'LOG_IN_REQUEST' :
            return {//리듀서를 나눌때, depth를 한 단계 줄여줌.
                ...state,
                isLoggingIn: true,
                // me: action.data,
            };
        case 'LOG_IN_SUCCESS' :
            return {//리듀서를 나눌때, depth를 한 단계 줄여줌.
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                me: { ...action.data, nickname: 'nickname'},
            };
        case 'LOG_IN_FAILURE' :
            return {//리듀서를 나눌때, depth를 한 단계 줄여줌.
                ...state,
                isLoggingIn: false,
                isLoggedIn: false,
            };
        case 'LOG_OUT_REQUEST' :
            return {
                ...state,
                isLoggingOut: true,
                // me: null,
            };
        case 'LOG_OUT_SUCCESS' :
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn: false,
                me: null,
            };
        case 'LOG_OUT_FAILURE' :
            return {
                ...state,
                isLoggingOut: false,
                // isLoggedIn: false,
                // me: null,
            };
        default:
            return state;
    }

};

export default reducer;