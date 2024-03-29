import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAN_USERS,
  GET_REPOS,
  SEARCH_USER,
} from './types';

// eslint-disable-next-line
export default (state: any, action: any) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SEARCH_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case CLEAN_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    default:
      return state;
  }
};
