import { DELETE, CREATE, UPDATE, FETCH_ALL, FETCH_BY_SEARCH,  FETCH_POST, SAVE_UNSAVE_POST_SUCCESS, FETCH_SAVED_POSTS } from "../constants/actionTypes";

export default (state = { posts: []}, action) => {
    switch(action.type) {
        case FETCH_ALL:
            return {
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case FETCH_BY_SEARCH:
            return { ...state, posts: action.payload};
        case CREATE: 
            return [...state, action.payload];
        case FETCH_POST:
            return { ...state, post: action.payload};
        case SAVE_UNSAVE_POST_SUCCESS:
            return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };  
        case FETCH_SAVED_POSTS:
            return { ...state, posts: action.payload.data};
        case UPDATE:
            return state.map((post) => post._id === action.payload._id ? action.payload : post)
        case DELETE:
            return state.filter((post) => post._id !== action.payload);
        default:
            return state;
    }
}

