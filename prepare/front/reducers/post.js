
export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'chocho',
            avatarImage: 'https://joeschmoe.io/api/v1/random'
        },
        content: '처음글 #해시태그 #익스프레스',
        Images: [{
            src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        }, {
            src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        }, {
            src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
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
        nickname: '흰구름',
        avatarImage: 'https://joeschmoe.io/api/v1/random'

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