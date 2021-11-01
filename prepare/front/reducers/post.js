
export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'chocho',
        },
        content: '처음글 #해시태그 #익스프레스',
        Images: [{
            src: '/Users/james/Downloads/signup_coupon_201116.jpg',
        }, {
            src: '/Users/james/Downloads/signup_coupon_201116.jpg',
        }, {
            src: '/Users/james/Downloads/signup_coupon_201116.jpg',
        }],
        Comments: [{
            User: {
                nickname: '닉네임'
            },
            content: 'brand new!!'
        }]
    }],
    imagePaths: [],
    postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST
}

const dummyPost = {
    id: 2,
    content: '더미데이터입니다.',
    User: {
        id: 1,
        nickname: '흰구름'
    },
    Images: [],
    Comments: [],
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],//dummyPost를 0번째에 추가: 최신게시물 상위
                postAdded: true
            }
        default:
            return state;
    }

};

export default reducer;