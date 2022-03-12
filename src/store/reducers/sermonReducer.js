import {
  CANCEL_REQUEST,
  LOADING,
  RESET_LOADER,
  SAVE_SERMONS,
  SAVE_SERMONS_ERROR,
} from '../types';

const initialState = {
  loading: false,
  error: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case SAVE_SERMONS: {
      const {docs, ...newMeta} = action.payload;
      return {
        ...state,
        loading: false,
        data: docs,
        meta: newMeta,
        error: '',
      };
    }
    case SAVE_SERMONS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESET_LOADER:
      return {
        ...state,
        loading: false,
      };
    case CANCEL_REQUEST:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
