import { REMOVE_ALERT, SET_ALERT } from './types';

// eslint-disable-next-line
export default (state: any, action: any) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alert: null,
      };
    default:
      return state;
  }
};
