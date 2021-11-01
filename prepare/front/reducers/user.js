
export const initialState = {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN' :
            return {//리듀서를 나눌때, depth를 한 단계 줄여줌.
                ...state,
                isLoggedIn: true,
                user: action.data,
            };
        case 'LOG_OUT' :
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }

};

export default reducer;