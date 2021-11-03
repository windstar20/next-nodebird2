import shortId from 'shortid';

export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'chocho',
            avatarImage: 'https://joeschmoe.io/api/v1/random',
        },
        content: '처음글 #해시태그 #익스프레스',
        Images: [{
            id: shortId.generate(),
            src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        }, {
            id: shortId.generate(),
            src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        }, {
            id: shortId.generate(),
            src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        }],
        Comments: [{
            id: shortId.generate(),
            User: {
                id: shortId.generate(),
                nickname: '닉네임',
            },
            content: 'brand new!!',
        }, {
            id: shortId.generate(),
            User: {
                id: shortId.generate(),
                nickname: '두번째 닉네임',
            },
            content: 'throw report!!',
        }],
    }],
    imagePaths: [],
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    removePostLoading: false,
    removePostDone: false,
    removePostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
};

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
});

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
});

const dummyPost = (data) => ({
    id: data.id,
    content: data.content,
    User: {
        id: 1,
        nickname: '흰구름',
        avatarImage: 'https://joeschmoe.io/api/v1/random',
    },
    Images: [],
    Comments: [],
});

const dummyComment = (data) => ({
    id: shortId.generate(),
    content: data,
    User: {
        id: 1,
        nickname: '제로초',
    },
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_POST_REQUEST:
        return {
            ...state,
            addPostLoading: true,
            addPostDone: false,
            addPostError: null,
        };
    case ADD_POST_SUCCESS:
        return {
            ...state,
            mainPosts: [dummyPost(action.data), ...state.mainPosts], // dummyPost를 0번째에 추가: 최신게시물 상위
            addPostLoading: false,
            addPostDone: true,
            // postAdded: true,

        };
    case ADD_POST_FAILURE:
        return {
            ...state,
            addPostLoading: false,
            addPostError: action.error,
        };
    case REMOVE_POST_REQUEST:
        return {
            ...state,
            removePostLoading: true,
            removePostDone: false,
            removePostError: null,
        };
    case REMOVE_POST_SUCCESS:
        return {
            ...state,
            mainPosts: state.mainPosts.filter((v) => v.id !== action.data),
            removePostLoading: false,
            removePostDone: true,

        };
    case REMOVE_POST_FAILURE:
        return {
            ...state,
            removePostLoading: false,
            removePostError: action.error,
        };
    case ADD_COMMENT_REQUEST:
        return {
            ...state,
            addCommentLoading: true,
            addCommentDone: false,
            addCommentError: null,
        };
    case ADD_COMMENT_SUCCESS: {
        const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
        const post = { ...state.mainPosts[postIndex] };
        post.Comments = [dummyComment(action.data.content), ...post.Comments];
        const mainPosts = [...state.mainPosts];
        mainPosts[postIndex] = post;
        return {
            ...state,
            mainPosts,
            addCommentLoading: false,
            addCommentDone: true,
        };
    }
    case ADD_COMMENT_FAILURE:
        return {
            ...state,
            addCommentLoading: false,
            addCommentError: action.error,
        };

    default:
        return state;
    }
};

export default reducer;
